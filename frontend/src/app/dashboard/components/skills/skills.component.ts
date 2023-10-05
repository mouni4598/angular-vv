import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor (private router: Router, private skillsService: SkillsService){}
  selectedSkills:any= {
    softSkills: [],
    technicalSkills: []
  };

  selectedSoftSkill: string = 'selectedSkills';
  selectedSoftSkillProficicency: string ='';

  selectedTechnicalSkill: string = '';
  selectedTechnicalSkillProficiency: string = '';

  onSaveClick(){
    const selectedSkill = {
      softSkill : this.selectedSoftSkill,
      softSkillProficiency: this.selectedSoftSkillProficicency,
      technicalSkill: this.selectedTechnicalSkill,
      technicalSkillProficiency: this.selectedTechnicalSkillProficiency
    };

    this.selectedSkills.push(selectedSkill);

    this.selectedSoftSkill = 'selectSkills';
    this.selectedSoftSkillProficicency = '';
    this.selectedTechnicalSkill = '';
    this.selectedTechnicalSkillProficiency = '';

    console.log('Selected Skills:', this.selectedSkills);

    this.skillsService.saveSkillsToDb(this.selectedSkills).subscribe(
      (response)=>{
        console.log('Data Saved Successfully:', response);
      },
      (error)=>{
        console.log('Error Saving data: ', error);
      }
    );
  }

  onClickCancel(){
    console.log("close is triggered");
    this.router.navigate(['/dashboard']);
  }
}
