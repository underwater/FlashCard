import { Injectable } from '@angular/core';
import { QuestionsAdminService } from '../services/questions.service';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

@Injectable({providedIn: 'root'})
export class QuestionsViewModel {
    private _initialized: boolean = false;
    public get initialized(): boolean {
        return this._initialized;
    }
    loading: boolean = false;
    questions: Question[] = [];
    question: Question = {
        id: 0,
        text: "",
        difficulty: null,
        answers: [],
        topic: null
    };
    private _editMode: boolean;
    get editMode(): boolean {
        return this._editMode;
    }

    constructor(private _service: QuestionsAdminService) { }
 
    async init() {
        if (this.initialized) {
            throw new Error(`${QuestionsViewModel.name} is already initialized`);
        }
        await this.refresh();
        this._initialized = true;
    }

    async refresh() {
        this.loading = true;
        this.questions = await this._service.getQuestions();
        this.loading = false;
    }

    async refreshQuestion(id: number) {
        this.loading = true;
        let q = await this._service.getQuestion(id);
        for(let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == q.id) {
                this.questions[i] = q;
                break;
            }
        }
        this.loading = false;
    }

    async addQuestion(question: Question) {
        try {
            this.loading = true;
            await this._service.addQuestion(question);
            await this.refresh();
        }
        catch (err) {
            //TODO: Handle it in the global error-handler
        }
        finally {
            this.loading = false;
        }
    }

    enterEditMode(question: Question) {
        this._editMode = true;
        this.question = {
            ...question
        };
    }

    async updateQuestion(question: Question) {
        this.loading = true;
        await this._service.updateQuestion(question);
        await this.refresh();
        this.exitEditMode();
    }

    exitEditMode() {
        this.question = {} as Question;
        this._editMode = false;
    }

    async removeQuestion(questionId: number) {
        this.loading = true;
        await this._service.removeQuestion(questionId);
        await this.refresh();
    }

    async addAnswer(questionId: number, answer: Answer) {
        this.loading = true;
        await this._service.addAnswer(questionId, answer);
        await this.refreshQuestion(questionId);
    }

    async removeAnswer(questionId: number, answerId: number) {
        this.loading = true;
        await this._service.removeAnswer(answerId);
        await this.refreshQuestion(questionId);
    }
}