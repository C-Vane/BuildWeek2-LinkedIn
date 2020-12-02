import React from 'react';
import { Row, Image, Form, Col } from 'react-bootstrap';
import Moment from 'react-moment';

class Comments extends React.Component {
    state = {
        comments: [],
        loaded: false,
        addComment: "",
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.getComments(this.props.postId)
        }, 1000);
    }
    getComments = (id) => {

    }
    handleChange = (e) => {

    }
    render() {
        const { user, postId } = this.props
        const { comments, loaded, addComment } = this.state
        return <div className="mt-2 pt-2" >
            <Col>
                <div className="row">
                    <Col sm={1}>
                        <Image style={{ width: "30px", height: "30px" }} />
                    </Col>
                    <Col sm={10} className="p-0">
                        <Form >
                            <Form.Group>
                                <Form.Control type="text" className="rounded-pill w-100  p-3" id={addComment} value={addComment} onChange={this.handleChange} placeholder="Add a comment..." />
                            </Form.Group>
                        </Form>
                    </Col>
                </div>
                <Row>
                    {loaded ? comments.length > 0 && comments.map((comment) =>
                        <Col>
                            <h6>{comment.user}</h6>
                            <small className="text-muted"><Moment fromNow>{comment.createdAt}</Moment> </small>
                            <p>{comment.text}</p>
                        </Col>
                    ) : <p>Loading...</p>}
                </Row>
            </Col>
        </div>;
    }
}

export default Comments;