const storyList = document.querySelector('ul');

let url = "https://newsapi.org/v2/top-headlines?category=technology&apiKey=ebaad7453ad142f39501fc3df8530a30";

fetch(url)
  .then(r => {
    return r.json(); // returns our request as a workable array of key/value pairs.
  })
  .then(jsonData => {
    let theArticles = jsonData.articles;

    theArticles.forEach(story => {
      let storyHeadline = document.createElement('li'); //Create an li for every story

      storyHeadline.innerHTML = '<a href="' + story.url + '">"' + story.title + '"' + "</a>";
      storyList.appendChild(storyHeadline); //add our list items onto the "ul" stored in storyList
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });