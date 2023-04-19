import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
  // This function will be executed when the form is submitted
  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
