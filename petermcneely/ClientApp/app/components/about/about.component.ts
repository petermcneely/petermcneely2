import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    public job = {
        title: "Senior Vice President of Software Development",
        site: "http://miacanalytics.com",
        name: "MIAC"
    }

    public favorite = {
        language: "C#",
        framework: "Entity Framework",
        tool: "Dot Net Core",
        placeToRun: "Prospect Park"
    }
}