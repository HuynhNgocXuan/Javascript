
var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm()
}


start();


function getCourses(callback) {
    fetch(courseApi) 
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };

    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    };

    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var deleCourseItem = document.querySelector('.course-item-' + id);
            if (deleCourseItem) {
                deleCourseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCourses = document.querySelector('#list-courses');

    var html = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h5>${course.name}</h5>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `;
    });


    listCourses.innerHTML = html.join('');
}


function handleCreateForm() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
    
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    } 
}
































































// var users = [
//     {
//         id: 1, 
//         name: 'Kien Dam',
//     },
//     {
//         id: 2,
//         name: 'Son Dang',
//     },
//     {
//         id: 3, 
//         name: 'Hung Dam',
//     },
//     //...
// ]

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi'
//     }
// ]

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000)
//     })
// }

// function getUserByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         })
//         setTimeout(function() {
//             resolve(result);
//         }, 1000)
//     })
// }



// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         })
//         return getUserByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
//     })

//     .then(function(data) {
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}: ${user.comment}</li>`
//         });
//         commentBlock.innerHTML = html
//     })


// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi) 
//     .then(function(responsive) {
//         return responsive.json();
//     })

//     .then(function(posts) {
//         console.log(posts);
//     })