import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png"
      title="First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    />
  );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } }
        ]
    }
}

export async function getStaticProps (context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
                title: 'First Meetup',
                id: meetupId,
                address: 'Some address 5, 12345 Some City',
                description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
            }
        }
    }
}

export default MeetupDetails;
