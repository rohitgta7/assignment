export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      age: 23,
      role: "Software Engineer",
    };
  },
  methods: {
    localAlert(value) {
      return window.alert(value);
    },
    optionMerge() {
      window.alert(
        `FirstName:- ${this.firstName} | LastName:-  ${this.lastName} | Age:- ${this.age} | Role:- ${this.role}`
      );
    },
  },
};
