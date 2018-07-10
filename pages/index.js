
export default () =>

<div> 
<div className="wrapper">
  <div className="one">One</div>
  <div className="two">Two</div>
  <div className="three">Three</div>
  <div className="four">Four</div>
  <div className="five">Five</div>
  <div className="six">Six</div>
  <div className="seven">seven</div>
  <div className="eight">Eight</div>
  <div className="right">Right Col</div>
  <div className="footer">Footer</div>
</div>

<style jsx> {`
	* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
  margin-top: 60px;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 0;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 2;
  grid-row: 1/4;
  background-image: url('./static/cold-daytime-forest.jpg');
}

.two { 
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background-image: url('./static/austria.jpg');
}
.three {
  grid-column: 1;
  grid-row: 4 / 6;
}
.four {
  grid-column: 3;
  grid-row: 1;
}
.five {
  grid-column: 2;
  grid-row: 3/5;
}
.six {
  grid-column: 3;
  grid-row: 2;
}
.seven {
  grid-column: 4/5;
  grid-row: 3/5;
}
.eight {
  grid-column: 3/4;
  grid-row: 3/5;
}
.right {
  grid-column: 4;
  grid-row: 1/3;
}
.footer {
  grid-column: 2/5;
  grid-row: 5/6;
}
`} </style>

<style global jsx> {`
	body {
		background-color: rgb(42, 107, 204);
		margin:0;
	}
`} </style>
</div>

