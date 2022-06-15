git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Eduardo Nuez Wehbe'
    GIT_AUTHOR_EMAIL='nuezwehbe@gmail.com'
    GIT_COMMITTER_NAME='Eduardo Nuez Wehbe'
    GIT_COMMITTER_EMAIL='nuezwehbe@gmail.com'
  " HEAD