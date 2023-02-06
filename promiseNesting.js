const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const pages = {
        "/users": [
          { id: 1, username: "Matthew" },
          { id: 2, username: "alberto" },
        ],
        "/users/1": {
          name: "Matthew",
          id: 1,
          born: 1996,
          country: "Austria",
        },
        "/users/1/Austria": {
          birthPlace: "Vienna",
          dob: "12-12-1996",
        },
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};
/********************NESTING**************************/
request("/users")
  .then((res) => {
    const userid = res.data[0].id;
    request(`/users/${userid}`).then((res) => {
      const country = res.data.country;
      request(`/users/${userid}/${country}`).then((res) => {
        console.log(res.data);
        // console.log(userid);
      });
    });
  })
  .catch((res) => {
    console.log("status", res.status);
  });


/********************CHAINING*************************/
request("/users")
  .then((res) => {
    const userid = res.data[0].id;
    return request(`/users/${userid}`);
  })
  .then((res) => {
    const country = res.data.country;
    return request(`/users/${userid}/${country}`);
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((res) => {
    console.log("status", res.status);
  });
