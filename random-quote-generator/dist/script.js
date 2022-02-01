// Quote Array
const quotes = [
{
  author: "Unknown",
  quote:
  "Forget all the reasons why it won't work and believe the one reason why it will" },

{
  author: "Ralph Waldo Emerson",
  quote: "Always do what you are afraid to do" },


{
  author: "Sara Blakely",
  quote:
  "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else." },

{
  author: "Unknown",
  quote:
  "If you keep on doing what you've always done, you will keep getting what you've always gotten." },

{
  author: "Jesus Christ",
  quote:
  " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16" },

{
  author: "Unknown",
  quote: "The surest way to find your dream job is to create it." },

{
  author: "Scott Belsky",
  quote: "It's not about ideas. It's about making ideas happen" },

{ author: "Larry Page", quote: "Always deliver more than expected" },
{
  author: "Coco Chanel",
  quote: "The most courageous act is still to think for yourself. Aloud." },

{
  author: "Sheryl Sandberg",
  quote: "What would you do if you were not afraid?" },

{ author: "Maya Angelou", quote: "Nothing will work unless you do" },
{
  author: "Sara Blakely",
  quote:
  "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else." },

{
  author: "Arianna Huffington",
  quote:
  "Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me." },

{
  author: "Andre Gide",
  quote:
  "One does not discover new lands without consenting to lose sight of the shore for a very long time." },

{
  author: "Oprah Winfrey",
  quote:
  "Surround yourself with only people who are going to lift you higher." },

{
  author: "Indra Nooyi",
  quote: "Sweating the details is more important than anything else." },

{
  author: "Richard Branson",
  quote:
  "You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion." },

{
  author: "Steve Jobs",
  quote: "Your time is limited, so don’t waste it living someone else’s life." },

{
  author: "Jack Ma",
  quote:
  "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine." },

{
  author: "Anne Sweeney",
  quote:
  "Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live." }];



/****** REDUX STATE MANAGEMENT ******/
// reducer
// const rootReducer;
// //Store
// const store=Redux.createStore(rootReducer);

//retrieve current state from the store
// const currentState=store.getState();

//redux Action -contain information about an action event that has occured
// const action= {
//   type:"click"
// }

//action creator - send the action to redux store to update state
// function actionCreator() {
//   return action ;
// }

//dispatch action event - This will dispatch the action to the Redux store
//passes the value returned from an action creator and send action to store
// store.dispatch(actionCreator())

//reducer function will handle action in store -

//define the action creator to send the action to the Redux store so it can updated its state

/*END STATE MANAGEMENT*/

//Random Number - 14 total quotes
// console.log(Math.random());
function randomNumber() {
  //return a number between 0 and 20
  const randoNum = Math.floor(Math.random() * 20);
  console.log(randoNum);
}

randomNumber();
// REACT
class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    //STATE
    this.state = {
      currentQuote: "It's not about ideas. It's about making ideas happen",
      currentAuthor: " - Scott Belsky" };

    //   Bind the Class MEthods
    this.newQuote = this.newQuote.bind(this);
  }
  // Set up Lifecycle Methods
  componentWillMount() {
    console.log("Mounted");
  }

  //   If api Calls needed, place them here. Or attach event listeners that affect specific functionality
  componentDidMount() {}
  // Handle the Methods to update the state
  //   click
  newQuote() {
    const randoNum = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randoNum]);

    let randomQuote = quotes[randoNum];

    return this.setState({
      currentQuote: randomQuote["quote"],
      currentAuthor: " - " + randomQuote["author"] });

  }
  //   Render
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("h1", { className: "title col text-center " }, "Great Quotes"), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left" }, " "), /*#__PURE__*/
      React.createElement("div", { id: "text", className: "quote-text" },
      this.state.currentQuote), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "author", className: "quote-author" }, /*#__PURE__*/
      React.createElement("p", null, this.state.currentAuthor))), /*#__PURE__*/


      React.createElement("div", { id: "button-div" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("a", {
        className: "btn btn-info btn-block",
        id: "tweet-quote",
        title: "Tweet this quote!",
        href: `https://twitter.com/intent/tweet?text=${this.state.currentQuote} ${this.state.currentAuthor} `,
        target: "_blank" }, /*#__PURE__*/

      React.createElement("i", { class: "fa fa-twitter" }))), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", {
        id: "new-quote",
        className: "btn btn-primary btn-block",
        onClick: this.newQuote },

      " ", "New Quote")))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById("root"));