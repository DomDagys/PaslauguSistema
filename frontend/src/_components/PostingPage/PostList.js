import React from "react";
import { postService, accountService, alertService } from "@/_services";
import { history } from "../../_helpers";

const PostList = () => {
  const [posts, setPosts] = React.useState([]);
  const user = accountService.userValue;
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    postService.getUserPosts(user.id).then((res) => {
      if (res.success) {
        setPosts(res.posts);
      }
    });
  }, [refresh]);

  return (
    <div className="p-5 mx-auto" style={{ maxWidth: "1300px" }}>
      <h1 className="center">Vartotojo skelbimai</h1>
      <h6>
        <a href="/newpost" className="btn btn-primary">
          Naujas skelbimas{" "}
        </a>
      </h6>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Skelbimo pavadinimas</th>
              <th>Aprašymas</th>
              <th>Kategorija</th>
              <th>Būsena</th>
              <th>Kaina</th>
              <th>Pristatymo laikas</th>
              <th>Pataisymai</th>
              <th>Peržiūros</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((x, i) => (
              <tr key={`row-${i}`}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>
                  {x.description.length > 200
                    ? x.description.substring(0, 200) + "..."
                    : x.description}
                </td>
                <td>{x.category}</td>
                <td>{+x.isActive === 1 ? "aktyvus" : "sustabdytas"}</td>
                <td>{x.price}</td>
                <td>{x.deliveryTime + " dienos"}</td>
                <td>{x.revisions}</td>
                <td>{x.views}</td>
                <td>
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => history.push(`/editpost/${x.id}`)}
                  >
                    Redaguoti
                  </button>
                  <a target="_blank" href={`/listings/${x.id}`}>
                    <button disabled={x.isActive ? false : true} className="btn btn-secondary mb-2">
                      Peržiūrėti
                    </button>
                  </a>

                  {x.isActive ? (
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        const archive = confirm("Ar tikrai norite archyvuoti skelbimą?");
                        if (archive) {
                          postService
                            .archivePost(x.id)
                            .then((res) => alertService.success(res.message))
                            .catch((res) => alertService.error(res.message));
                        }
                      }}
                    >
                      Archyvuoti
                    </button>
                  ) : (
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        const unarchive = confirm("Ar tikrai norite aktyvuoti skelbimą?");
                        if (unarchive) {
                          postService
                            .unarchivePost(x.id)
                            .then((res) => alertService.success(res.message))
                            .catch((res) => alertService.error(res.message));
                        }
                      }}
                    >
                      Aktyvuoti
                    </button>
                  )}

                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const confirmDelete = confirm("Ar tikrai norite ištrinti savo skelbimą?");
                      if (confirmDelete) {
                        postService.deletePost(x.id).then((res) => {
                          if (!res.error) {
                            alertService.success("Skelbimas pašalintas");
                            setRefresh(!refresh);
                          }
                        });
                      }
                    }}
                  >
                    Trinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
