import React from "react";
import { Button, Form, Container, InputGroup } from "react-bootstrap";
import { postService, accountService, alertService } from "@/_services";
import { history } from "../../_helpers";

const EditPost = (props) => {
  const postId = props.match.params.id;
  const categories = [
    "Grafinis dizainas",
    "Programavimas",
    "Marketingas",
    "Video ir animacijos",
    "Muzika ir audio",
  ];
  const user = accountService.userValue;
  const [post, setPost] = React.useState({
    id: "",
    title: "",
    description: "",
    category: categories[0],
    images: ["", "", "", ""],
    views: 0,
    price: "",
    revisions: "",
    deliveryTime: "",
    accountId: user.id,
  });

  React.useEffect(() => {
    postService.getPostById(postId).then((res) => {
      if (res.success) {
        let initialPost = res.data;
        initialPost.images = initialPost.images.split("|");
        for (let i = initialPost.images.length; i < 4; i++) {
          initialPost.images.push("");
        }
        setPost(initialPost);
      }
    });
  }, []);

  return (
    <div className="py-5">
      <h1 className="center">Skelbimo redagavimas</h1>
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            let p = JSON.parse(JSON.stringify(post));
            p.images = p.images.join("|");
            postService
              .editPost(p)
              .then((res) => {
                alertService.success("Skelbimas sėkmingai redaguotas");
                history.push("/postlist");
              })
              .catch((error) => {
                alertService.error(error);
              });
          }}
        >
          <Form.Group controlId="formBasicText">
            <Form.Label>Antraštė</Form.Label>
            <Form.Control
              type="text"
              value={post.title}
              onChange={(e) => {
                e.persist();
                setPost((prev) => Object.assign({}, prev, { title: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTextArea">
            <Form.Label>Aprašymas</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={post.description}
              onChange={(e) => {
                e.persist();
                setPost((prev) => Object.assign({}, prev, { description: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Kategorija</Form.Label>
            <Form.Control
              as="select"
              value={post.category}
              onChange={(e) => {
                e.persist();
                setPost((prev) => Object.assign({}, prev, { category: e.target.value }));
              }}
            >
              {categories.map((x, i) => (
                <option key={`category-${i}`}>{x}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.File id="FormControlFile" label="Pasirinkite paveikslėlį" />
          </Form.Group>

          <Form.Group controlId="formBasicText">
            <Form.Label>Kaina</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                value={post.price}
                onChange={(e) => {
                  e.persist();
                  setPost((prev) => Object.assign({}, prev, { price: e.target.value }));
                }}
                type="float"
              />{" "}
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Atlikimo laikas</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">dienos</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                value={post.deliveryTime}
                onChange={(e) => {
                  e.persist();
                  setPost((prev) => Object.assign({}, prev, { deliveryTime: e.target.value }));
                }}
                type="text"
              />{" "}
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Pataisymų skaičius</Form.Label>
            <Form.Control
              type="text"
              value={post.revisions}
              onChange={(e) => {
                e.persist();
                setPost((prev) => Object.assign({}, prev, { revisions: e.target.value }));
              }}
            />
          </Form.Group>
          <div className="row no-gutters">
            <div className="col-md-6 col-12 pr-md-2">
              <Form.Group controlId="formBasicText">
                <Form.Label>1 paveikslėlis</Form.Label>
                <Form.Control
                  type="text"
                  value={post.images[0]}
                  onChange={(e) => {
                    e.persist();
                    setPost((prev) => {
                      let arr = [...prev.images];
                      arr[0] = e.target.value;
                      return Object.assign({}, prev, { images: arr });
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-12">
              <Form.Group controlId="formBasicText">
                <Form.Label>2 paveikslėlis</Form.Label>
                <Form.Control
                  type="text"
                  value={post.images[1]}
                  onChange={(e) => {
                    e.persist();
                    setPost((prev) => {
                      let arr = [...prev.images];
                      arr[1] = e.target.value;
                      return Object.assign({}, prev, { images: arr });
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-12 pr-md-2">
              <Form.Group controlId="formBasicText">
                <Form.Label>3 paveikslėlis</Form.Label>
                <Form.Control
                  type="text"
                  value={post.images[2]}
                  onChange={(e) => {
                    e.persist();
                    setPost((prev) => {
                      let arr = [...prev.images];
                      arr[2] = e.target.value;
                      return Object.assign({}, prev, { images: arr });
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-12">
              <Form.Group controlId="formBasicText">
                <Form.Label>4 paveikslėlis</Form.Label>
                <Form.Control
                  type="text"
                  value={post.images[3]}
                  onChange={(e) => {
                    e.persist();
                    setPost((prev) => {
                      let arr = [...prev.images];
                      arr[3] = e.target.value;
                      return Object.assign({}, prev, { images: arr });
                    });
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Išsaugoti
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditPost;
