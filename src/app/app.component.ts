import { Component } from "@angular/core";

interface Post {
  title: string;
  content: string;
  lovIts: number;
  cretaed_at?: Date;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts: Post[] = [
    {
      title: "firmware",
      content: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
      lovIts: -2
    },
    {
      title: "alliance",
      content:
        "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
      lovIts: 0
    },
    {
      title: "Profound",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      lovIts: 7
    },
    {
      title: "Ergonomic",
      content:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      lovIts: 9
    },
    {
      title: "object-oriented",
      content:
        "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      lovIts: 7
    },
    {
      title: "flexibility",
      content:
        "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
      lovIts: -5
    },
    {
      title: "intangible",
      content:
        "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
      lovIts: 6
    },
    {
      title: "multimedia",
      content: "Aliquam quis turpis eget elit sodales scelerisque.",
      lovIts: -2
    },
    {
      title: "grid-enabled",
      content:
        "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      lovIts: -4
    },
    {
      title: "website",
      content: "Suspendisse accumsan tortor quis turpis.",
      lovIts: 8
    }
  ];
}
