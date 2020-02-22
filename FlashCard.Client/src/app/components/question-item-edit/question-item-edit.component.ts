import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionsAdminService } from 'src/app/services/questions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question-item-edit',
  templateUrl: './question-item-edit.component.html',
  styleUrls: ['./question-item-edit.component.css']
})
export class QuestionItemEditComponent implements OnInit {

  Questions: Question[];

  constructor(
    private service: QuestionsAdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  initialLoad: Subscription;
  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.initialLoad = this.service.getQuestion(+id).subscribe(
      question => {
        this.editForm.patchValue(question);
        console.log('question retrieved', question);
      },
      err => { console.log(err) });

  }

  editForm = this.formBuilder.group({
    id: [null],
    text: ['']
  });

  cancel() {
    this.router.navigate(['/questions']);
  }

}
