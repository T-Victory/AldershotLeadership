export default class Event {
    name: string;
    date: string;
    location: string;
    description: string;
    mainContact: string;
    secondaryContact: string;

    constructor(name, date, location, description, mainContact, secondaryContact) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
        this.mainContact = mainContact;
        this.secondaryContact = secondaryContact;

        //this.timeUntilDate = date - currentDate;
    }

    pushEvent() {
        // Code for function goes here
    }
}