﻿using System;
using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    /*
     *    1 - how to store rich text content? should I store the markup (HTML) ? What if we'd like to restyle (.css)
     *    2 - how to store supplementary diagram, formatted code sample ?
     *    3 - I will have (3) types of questions (True / False), and Multiple Choice (either single correct, or multiple correct)
     *        is it better to model these types of questions 
     *        a - using seperate classes (with perhaps a common base class with subtype for each type of question)
     *        b - keep things simple and use a single class for all of them
     */
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public Topic Topic { get; set; }
        public Difficulty Difficulty { get; set; }
        
        public List<Answer> Answers { get; set; }

        // better to just keep this as free text?
        public List<Uri> Resources { get; set; }

        // find more generic name (and data type) to represent sample code / diagram / image to accompany question ?
        public string CodeSnippet { get; set; }
    }
 

    public class Answer
    {
        public int Id { get; set; }
        public string Text { get; set; }       
        public bool IsCorrect { get; set; }
    }

    public class Quiz
    {
        public int NumberOfQuestions { get; set; }
        public int TimeToComplete { get; set; }
        public int PassingScore { get; set; }
        public bool ShowCorrectAnswerDuringQuiz { get; set; }
    }
}