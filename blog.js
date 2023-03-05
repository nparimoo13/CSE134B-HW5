export function newPost() {
    let myNewPostDOM = document.createElement("dialog");
    myNewPostDOM.setAttribute("id", "myPrompt");
    myNewPostDOM.setAttribute("open", true);
    myNewPostDOM.innerHTML = 
    `
            <form method ="dialog">
                <label for="post-title">Post Title:</label>
                <input type="text" id="post-title" name="post-title"> <br>
                <label for="post-date">Post Date:</label>
                <input type="date" id="post-date" name ="post-date"><br>
                <label for="post-summary">Post Summary:</label>
                <textarea id="post-summary"></textarea>

                <button id="submit-button" onclick="savePost()">Submit</button>
            </form>
    `;
    document.body.appendChild(myNewPostDOM);
  }
 // export function showPost()
//   {
//     let submitBtn = document.getElementById("submit-button");
//         const postTitle = document.getElementById("post-title").value;
//         const postDate = document.getElementById("post-date").value;
//         const postSummary = document.getElementById("post-summary").value;
//         let thisOutput = document.getElementById("output");
//         thisOutput.innerHTML = `Post Title: ${postTitle}
//                                 Post Date: ${postDate}
//                                 Post Summary: ${postSummary}`;
//   }
  export function savePost() {
    
        const postTitle = document.getElementById("post-title").value;
        const postDate = document.getElementById("post-date").value;
        const postSummary = document.getElementById("post-summary").value;

        const post = {
            postTitle: postTitle,
            postDate: postDate,
            postSummary: postSummary
        }

        let posts = localStorage.getItem("posts");
        if(posts == null) {
            posts = [];
        }
        else
        {
            posts = JSON.parse(posts);
        }

        posts.push(post);

        localStorage.setItem("posts", JSON.stringify(posts));
        showPosts();
  }
  function showPosts() {
    let posts = localStorage.getItem("posts");
    if (posts == null){
        posts = [];
    } else 
    {
        posts = JSON.parse(posts);
    }

    const postList = document.getElementById("postShow");
    postList.innerHTML = "";

    for (let i = 0; i < posts.length; i++)
    {
        const post = posts[i];

        const poster = document.createElement("div");

        const thisTitle = document.createElement("h2");
        thisTitle.innerHTML = post.postTitle;
        poster.appendChild(thisTitle);

        const thisDate = document.createElement("p");
        thisDate.innerHTML = post.postDate;
        poster.appendChild(thisDate);

        const thisSummary = document.createElement("p");
        thisSummary.innerHTML = post.postSummary;
        poster.appendChild(thisSummary);

        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editPost(i);
        };
        poster.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deletePost();
        };
        poster.appendChild(deleteButton);


        postList.appendChild(poster);

    }
    //location.reload();
    function editPost(index)
    {
        const post = posts[index];
        
        document.getElementById("post-title").value = post.postTitle;
        document.getElementById("post-date").value = post.postDate;
        document.getElementById("post-summary").value = post.postSummary;

        posts.splice(index, 1);

        localStorage.setItem("posts", JSON.stringify(posts));
        newPost();
        //showPosts();
    }

    function deletePost(index)
    {
        posts.splice(index, 1);

        localStorage.setItem("posts", JSON.stringify(posts));

        showPosts();
    }

    window.onload = function() {
        showPosts();
    }
}

    
