# GIt'i tekitamine juba olemasolevast lokaalsest tööst

## Juhend Github lehel

[Giti link](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line)

## Juhend siinsamas

- Loo .gitignore fail, kuhi lisa rida `node_modules`see välistab node moodulite lisamise giiti, mis oleks maru aeganõudev ja mahukas
- Loo Githubis uus repo, jäta vaikimis valikud
- vaata githubis avanenud õpetust ja kasuta sealt:
- terminalis: `git init`
- `git add .`
- `git commit -m "first commit"`
- `git branch -M main`
- `git remote add origin sinugitiaadress/sinurepo.git`

Juhul kui su jälgitavad failid on ära käsššitud, siis saa cache, enne git pushi puhtaks käsuga `git rm -r --cached .`  
Seejärel juba tavapärane git add, commit, push.

# Test

pest
