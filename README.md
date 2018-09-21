
-----------------------

- starting project
git clone -b branch_name http.git
cd SE_kuaijiebao ここ大事！！
“"
git fetch
git checkout remote_branch_nameでローカルfolderに落とす
“”””””””””””"
OR
“"
git pull origin updating_branch
“””””””””””””"

- checkout branch
git checkout another_branchの時に
Please commit your changes or stash them before you switch branches.
Abortingの時は
git reset HEAD で unstage from cache

changes not staged for commitの時は
https://qiita.com/konweb/items/061475d6376db957b3c4


- MERGE
git merge branch_merging_from

conflictの時は
git diff --name-only --diff-filter=U
conflictの解決
git checkout —thiers/ours file_name
でファイルごとに解決
最後に(conflictしてもしなくても)
git add.
git commit -m “”
git push origin branch _name
