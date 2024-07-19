function App(){
return
<div>
  <h1>welcome to first react deploy</h1>
  <p>npm install gh-pages --save-dev<br/>
  git hub upload
  <br/>
  deploy settings
  packages .json 
  "homepage":https://username.github.io/repository name
   in scripts
   "predeploy":"npm run build"
   "deploy":"gh-pages -d build "
   after in terminal type "npm run deploy"
   after open repository deploy pages and check
  </p>
</div>
} 
export default App;