class GitHub {
  constructor() {
    this.client_id = "0e3489c09529f1d6d6a8";
    this.client_secret = "bc2e4f5201681d92ba218f581c99a3b1ed9de176";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
