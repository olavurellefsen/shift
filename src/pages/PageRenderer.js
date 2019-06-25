import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;

class ScenarioDescriptions extends Component {
  state = {
    posts: []
  };

  async updateContent() {
    const posts = await Promise.all(
      this.props.markdownFiles.map(file => fetch(file).then(res => res.text()))
    ).catch(err => console.error(err));

    this.setState(state => ({ ...state, posts }));
  }

  componentDidMount() {
    this.updateContent();
  }

  componentDidUpdate() {
    this.updateContent();
  }

  render() {
    const { posts } = this.state;

    return (
      <AboutContainer>
        {posts.map((post, idx) => (
          <div key={idx}>
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        ))}
      </AboutContainer>
    );
  }
}

ScenarioDescriptions.propTypes = {
  markdownFiles: PropTypes.array.isRequired
};

export default ScenarioDescriptions;
