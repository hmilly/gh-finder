const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const { items } = await response.json();

  return items;
};

export const fetchUserData = async (login) => {
  const params = new URLSearchParams({ sort: "created", per_page: 8 });

  const [user, repos] = await Promise.all(
    [
      `${GITHUB_URL}/users/${login}`,
      `${GITHUB_URL}/users/${login}/repos?${params}`,
    ].map((url) =>
      fetch(url, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }).then((resp) => resp.json())
    )
  );
  return { user: user, repos: repos };
};
