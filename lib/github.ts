export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  owner: {
    login: string;
  };
  // Add any other fields you might need
}

export async function getGithubRepos(username: string, limit: number = 6): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=${limit}`,
      {
        // For development, 'no-store' ensures fresh data on each request.
        // For production, consider 'force-cache' with revalidation, or rely on default caching.
        cache: 'no-store',
        // It's good practice to include User-Agent header
        headers: {
          'User-Agent': 'request', // GitHub API requires a User-Agent header
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Failed to fetch GitHub repos for ${username}: ${res.status} ${res.statusText}`, errorText);
      // You could throw an error here or return an empty array
      // throw new Error(`Failed to fetch repos: ${res.status}`);
      return [];
    }

    const data = await res.json();

    // Map to the Repo interface to ensure consistent data structure
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
      pushed_at: repo.pushed_at,
      owner: { // Include owner login if needed for constructing URLs or display
        login: repo.owner.login
      }
    }));
  } catch (error) {
    console.error(`Error fetching GitHub repos for ${username}:`, error);
    return []; // Return empty array on any other error
  }
}
