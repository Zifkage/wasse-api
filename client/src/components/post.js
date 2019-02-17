import React from 'react';
import { Link } from 'react-router-dom';

const post = (props) => {
  return (
    <div className="row">
      <div
        style={{ wordWrap: 'break-word', color: 'white' }}
        className="col s12 m8"
      >
        <div className="card  darken-1">
          <div className=" grey  card-content ">
            <b>
              <h4
                style={{
                  borderBottom: '2px solid orange',
                  paddingBottom: '5px',
                }}
              >
                {props.post.title}
              </h4>
            </b>
            {props.navigable ? (
              <p>
                <Link
                  style={{ color: 'white', display: 'block' }}
                  to={`/post/${props.post._id}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ullamcorper erat sed eleifend pretium. Ut ut felis
                  laoreet tortor mollis ornare vitae sed ante. Ut a pellentesque
                  orci. Sed quam elit, faucibus eu nulla et, accumsan venenatis
                  arcu. Vestibulum molestie lacinia risus et cursus. Nunc
                  imperdiet justo sapien, eu luctus lacus posuere fermentum. Ut
                  fermentum leo ut erat tincidunt maximus. Morbi tempus tempus
                  risus, non accumsan diam vulputate vel. Nunc at sem hendrerit
                  erat euismod blandit. Sed dignissim risus ut ipsum semper
                  congue. Aliquam imperdiet scelerisque arcu
                </Link>
              </p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ullamcorper erat sed eleifend pretium. Ut ut felis laoreet
                tortor mollis ornare vitae sed ante. Ut a pellentesque orci. Sed
                quam elit, faucibus eu nulla et, accumsan venenatis arcu.
                Vestibulum molestie lacinia risus et cursus. Nunc imperdiet
                justo sapien, eu luctus lacus posuere fermentum. Ut fermentum
                leo ut erat tincidunt maximus. Morbi tempus tempus risus, non
                accumsan diam vulputate vel. Nunc at sem hendrerit erat euismod
                blandit. Sed dignissim
              </p>
            )}
          </div>
          <button
            style={{ marginRight: '5px' }}
            className="waves-effect grey waves-light btn-small"
          >
            <i className="material-icons ">arrow_upward</i>
          </button>
          <button className="waves-effect grey waves-light btn-small">
            <i className="large material-icons">arrow_downward</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default post;
