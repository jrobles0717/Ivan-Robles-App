const ARTIST_ID = "08J3Z1fG0FL98AkVqiRBMn";
const ARTIST_FALLBACK_URL = `https://open.spotify.com/artist/${ARTIST_ID}`;

type NetlifyResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type SpotifyAlbumItem = {
  id: string;
  name: string;
  album_type: "album" | "single" | "compilation";
  release_date: string;
  release_date_precision: "day" | "month" | "year";
  total_tracks: number;
};

type SpotifyArtistAlbumsResponse = {
  items: SpotifyAlbumItem[];
};

type SpotifyAlbumTrack = {
  id: string;
};

type SpotifyAlbumDetailsResponse = {
  tracks?: {
    items?: SpotifyAlbumTrack[];
  };
};

function normalizeReleaseDate(
  releaseDate: string,
  precision: "day" | "month" | "year"
): number {
  if (precision === "day") {
    return new Date(releaseDate).getTime();
  }

  if (precision === "month") {
    return new Date(`${releaseDate}-01`).getTime();
  }

  return new Date(`${releaseDate}-01-01`).getTime();
}

function redirect(location: string): NetlifyResponse {
  return {
    statusCode: 302,
    headers: {
      Location: location,
      "Cache-Control": "public, max-age=300",
    },
    body: "",
  };
}

export const handler = async (): Promise<NetlifyResponse> => {
  try {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID || "";
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || "";

    if (!clientId || !clientSecret) {
      return {
        statusCode: 500,
        body: "Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET.",
      };
    }

    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    );

    // 1) Get Spotify access token
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) {
      return redirect(ARTIST_FALLBACK_URL);
    }

    const tokenData = (await tokenRes.json()) as
      | SpotifyTokenResponse
      | undefined;

    const accessToken = tokenData?.access_token;

    if (!accessToken) {
      return redirect(ARTIST_FALLBACK_URL);
    }

    // 2) Get artist releases
    const releasesRes = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single,album&market=US&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!releasesRes.ok) {
      return redirect(ARTIST_FALLBACK_URL);
    }

    const releasesData = (await releasesRes.json()) as
      | SpotifyArtistAlbumsResponse
      | undefined;

    const items = releasesData?.items ?? [];

    // Remove duplicates
    const uniqueReleases = items.filter(
      (item, index, self) => self.findIndex((r) => r.id === item.id) === index
    );

    if (!uniqueReleases.length) {
      return redirect(ARTIST_FALLBACK_URL);
    }

    // 3) Sort newest first
    uniqueReleases.sort((a, b) => {
      return (
        normalizeReleaseDate(b.release_date, b.release_date_precision) -
        normalizeReleaseDate(a.release_date, a.release_date_precision)
      );
    });

    const latestRelease = uniqueReleases[0];

    // 4) Default: go to album
    let redirectUrl = `https://open.spotify.com/album/${latestRelease.id}`;

    // 5) If latest release is a one-track single, redirect to the track itself
    if (
      latestRelease.album_type === "single" &&
      latestRelease.total_tracks === 1
    ) {
      const albumRes = await fetch(
        `https://api.spotify.com/v1/albums/${latestRelease.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (albumRes.ok) {
        const albumData = (await albumRes.json()) as
          | SpotifyAlbumDetailsResponse
          | undefined;

        const firstTrackId = albumData?.tracks?.items?.[0]?.id;

        if (firstTrackId) {
          redirectUrl = `https://open.spotify.com/track/${firstTrackId}`;
        }
      }
    }

    return redirect(redirectUrl);
  } catch (error) {
    console.error("latest-release function error:", error);
    return redirect(ARTIST_FALLBACK_URL);
  }
};
