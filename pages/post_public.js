import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

export default class extends React.Component {
  static async getInitialProps({ req, query, err }) {
    return { query };
  }

  componentDidMount() {
    console.log(this.props.query)
  }

  render() {
    return (
      <div>
      <Head title="Home" />
      <Nav />
  
      <div className="hero">
        <h1>Post Slug: <code>{this.props.query.slug}</code></h1>
        <h3>Post ID: <code>{this.props.query.id}</code></h3>

        <p className="description">
          Please reload the page.
        </p>
  
      </div>
  
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
    );
  }
}
