export default class Group {
    name: string;
    dates: string;
    location: string;
    description: string;
    mainContact: string;
    secondaryContact: string;

    constructor(name, dates, location, description, mainContact, secondaryContact) {
        this.name = name;
        // Should be an array
        this.dates = dates;
        this.location = location;
        this.description = description;
        this.mainContact = mainContact;
        this.secondaryContact = secondaryContact;

        //this.timeUntilDate = date - currentDate;
    }

    pushMeeting() {
        // Code for function goes here
    }
}