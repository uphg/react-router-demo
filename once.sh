# 第一次关联两个仓库
echo -e "\n== init =="
git init
git add .
git commit -m "实现 React Hash 路由"
echo -e "== init end ==\n"

git remote add github git@github.com:uphg/react-router-demo.git
git remote add gitee git@gitee.com:uphg/react-router-demo.git

echo "== push Github =="
git push github master:master
echo -e "== push Github end ==\n"

echo "== push Gitee =="
git push gitee master:master
echo -e "== push Gitee end ==\n"
