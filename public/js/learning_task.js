/** to do list */
// main version
// update payment per point
// check for an error in the code: feedback at start of part 2 the same image!
// check if eyetracking data is saved correctly


/**************/
/** Constants */
/**************/
// const nrating = 5;
// const nchoices = 5;
// const fixation_duration = 500;
// const nprac = 3;
const nImageInst = 2;
const debugModeCaliDot = 1;
const realCaliDot = 12; // 12

// const feedback_duration = 3000;
const maxTimeChoice = 3000;
const feedbackDuration = 2000;

var subject_id = jsPsych.randomization.randomID(7);

var payFailQuiz = '50c';
var payFailCalibration = '50c';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// choose randomly the condition for the subject
var condition = getRandomInt(1,2);
var imageSet = getRandomInt(1,2);


/** load instructions images */
var instructions_images = [];
for (var i = 1; i < 14; i++) {
    instructions_images.push('img/instructions1/Slide' + i + '.png');
}

var instructions_image_set = [];
if(imageSet===1){
    instructions_image_set.push('img/instructions2/images_set_1.png');
} else {
    instructions_image_set.push('img/instructions2/images_set_2.png');
}

/** load learning task images */
var fractal_images = [];
if(imageSet===1){
    for (var i = 1; i < 7; i++) {
        fractal_images.push('img/fractals1/blue_' + i + '.svg');
    }
} else {
    for (var i = 1; i < 7; i++) {
        fractal_images.push('img/fractals2/black_' + i + '.svg');
    }
}

var blank_image = [];
blank_image.push('img/fractals1/blue_' + 0 + '.svg');

/** control questions images */
var control_images = [];
for (var i = 1; i < 3; i++){
    control_images.push('img/control/control_img_' + i + '.png');
}

/** memory quiz images */
var memory_images = [];
if(imageSet===1){
    memory_images.push('img/memory/memory_img_1.png');
} else {
    memory_images.push('img/memory/memory_img_2.png');
}

/** load all the images, and remember to preload before starting the egitxperiment */
var instruct_img = [];
for (var i = 0; i < nImageInst; i++) {
    instruct_img.push('img/instruct' + i + '.png');
}



/** fixation durations */
var fixation1_duration = [
    2625.09891143345,2005.13802795240,4298.85853646120,2577.79325804330,3943.22479286380,3296.56691907721,2784.60441485619,2994.78871119599,3846.95038043691,3903.81854635299,3110.21423992300,4111.44783708801,3522.12386969501,2809.79696094300,2177.74721089799,2231.54615734998,2945.12859360901,2787.02805367999,2599.80039147302,2870.44663981399,4378.75446658998,2237.85578436301,4355.14030181898,4385.48561612402,3193.01450446000,2638.34798818499,5080.60163329299,2763.57770208102,2239.97171906598,5225.55689960200,5979.61518459795,2166.26462178402,4145.57942888303,2219.33787174999,2594.04860515804,4417.92266312996,2660.21673668797,2222.94677658698,2591.50704956301,2871.85798034795,2311.71883475599,4205.95648862900,2528.86677941098,2085.22708670102,3366.53111007701,3453.28557875405,2670.05950639100,2394.69241064592,3393.61024649793,2237.23025867594,3031.41671058404,2879.91820785510,3694.33678831797,3207.52910849296,2014.37096063398,2111.70387269101,2137.15426652891,2146.71554789902,2111.75973395609,2266.31222309993,2481.99345847900,5108.23739043804,3533.56318919998,2130.57922891198,2645.24502060806,5035.47183966793,2191.62054560809,2414.62489951994,2074.99078284502,2034.26970878706,4163.01131753801,3131.12593560800,5785.30055126498,2982.15596798798,2297.67468214197,3027.58730802100,3600.33026059000,3417.73224742508,2039.02681921500,2025.53721717902,2660.67814303506,2315.28681700991,3479.38193161201,2749.10773205602,4234.74261707099,3243.42116042999,3621.85219059893,3041.58914800303,2871.97463297002,2816.33588849900,3825.45408507997,2362.82447995995,2414.06567541981,5787.07116214014,2128.44577565988,3953.87707828991,2914.43366062003,2097.14144996997,3454.03851760011,2232.32936515001,3089.33239473004,3425.26452948005,2541.07799535996,2605.50660873014,2602.76068580015
];
var fixation2_duration = [
    2333.78890067635,4302.24366985900,4357.72745910910,2619.28817606730,3201.47015671610,2542.32447447740,2205.02404896801,4597.60093195899,2488.18923879330,2069.02370665901,3771.55761711200,2192.19280048100,3266.62710453900,3282.15014684000,2270.03268176202,2057.66791494401,3896.90259644300,3682.00520350499,2276.50932423299,3740.44266634002,2358.26109174300,4520.29238519901,2922.81414611702,2026.48796595298,3160.11103174600,3511.55058106303,4815.93397634998,2402.65400587299,4858.67914183200,2267.44012051705,4453.50562801502,2815.62197135298,2080.66054475097,2671.20020986800,4371.10056174799,4937.35986227705,2149.79340069402,2722.25410876200,3715.73017638502,2105.08326790000,3437.02333580302,3518.47422147802,2512.52792032500,2492.24701552600,3298.61160710999,4000.42339385993,4590.66766612204,2501.02102436711,2439.59507537306,3002.28473580398,2771.51074656194,2366.00434576496,2675.67733599606,2336.04972201704,2026.90868825800,2171.56491830701,2149.12066534600,3573.30658046897,2284.08460094101,2165.27979577802,3327.89062550899,2877.46029211303,4363.62594519699,3049.11428824698,2288.92452624098,2105.82359229602,2264.34938420596,3309.02285568607,3814.53969973393,4983.30332975399,2500.69700173401,2340.80974699100,2443.99299899897,2295.88825838005,3091.44400312800,2951.37436618506,2542.52680899492,4639.69405025398,3064.35991811793,4509.77823141602,2791.18002819200,3095.42190859600,3052.15046577302,2439.46343740799,4665.14083295397,2232.46703762311,5511.91312575202,2773.45915361400,4744.41923577092,4387.49269953007,2958.78672045001,2896.89188873012,2773.75946707002,3495.29106914997,5355.10943837016,5629.66004537998,2831.72515544993,2163.34842644005,4211.43760506993,3849.85636370993,2903.11218445004,2013.60868328993,2284.68916458996,3041.01237878990,1156.10336369991
];


var img_pairs;


//learning task payoffs
if(condition===1){
    // condition 1
    var payoff_levels = [[11, 7], [6, 10], [9, 5], [4, 8], [7, 3], [2, 6]];
} else {
    // condition 2
    var payoff_levels = [[7, 11], [10, 6], [5, 9], [8, 4], [3, 7], [6, 2]];
}

function genSequence(a, b, c, d, e, f) {
    var output = [
        [f, f],
        [a, b],
        [c, d],
        [e, f],
        [a, a],
        [b, c],
        [d, e],
        [a, f],
        [c, c],
        [b, d],
        [a, e],
        [c, f],
        [d, d],
        [b, e],
        [a, c],
        [d, f],
        [b, b],
        [c, e],
        [a, d],
        [b, f],
        [e, e],
        [a, a],
        [d, c],
        [e, f],
        [b, a],
        [d, d],
        [c, e],
        [f, b],
        [d, a],
        [e, e],
        [c, f],
        [d, b],
        [e, a],
        [f, f],
        [c, b],
        [d, e],
        [f, a],
        [c, c],
        [e, b],
        [d, f],
        [c, a],
        [b, b],
        [d, d],
        [e, f],
        [b, c],
        [a, d],
        [e, e],
        [f, b],
        [c, a],
        [e, d],
        [b, b],
        [f, c],
        [e, a],
        [b, d],
        [c, c],
        [f, a],
        [e, b],
        [c, d],
        [f, f],
        [b, a],
        [e, c],
        [f, d],
        [a, a],
        [b, b],
        [c, e],
        [a, f],
        [d, b],
        [c, c],
        [e, a],
        [f, d],
        [c, b],
        [a, a],
        [e, f],
        [c, d],
        [a, b],
        [f, f],
        [e, d],
        [c, a],
        [f, b],
        [e, e],
        [a, d],
        [c, f],
        [e, b],
        [d, d],
        [c, c],
        [e, b],
        [f, d],
        [a, c],
        [e, e],
        [b, f],
        [d, a],
        [e, c],
        [f, f],
        [b, d],
        [e, a],
        [f, c],
        [d, d],
        [b, a],
        [e, f],
        [d, c],
        [b, b],
        [f, a],
        [e, d],
        [b, c],
        [a, a]
    ]
    // randomize left-right positions within an array
    var shuffledOutput = [];
    for(var i = 0; i < output.length; i++){
        shuffledOutput.push(jsPsych.randomization.shuffle(output[i]));
    }
    return shuffledOutput;
};

// random shuffle of levels for payoffs and images
var randLevels = jsPsych.randomization.shuffle([0,1,2,3,4,5]);

// generate placeholder sequence
var shuffledSequence = genSequence(randLevels[0],randLevels[1],randLevels[2],randLevels[3],randLevels[4],randLevels[5]);

// randomize the payoffs for each participant
// var payoff_shuffle = jsPsych.randomization.shuffle(payoff_levels);
// select the payoffs according to the sequence
// var payoffs_base = genSequence(payoff_shuffle[0], payoff_shuffle[1], payoff_shuffle[2], payoff_shuffle[3], payoff_shuffle[4], payoff_shuffle[5]);

function get_payoffs_base(shuffledSequence,payoff_levels){
    var payoffs_base = [];
    for (var i = 0; i < shuffledSequence.length; i++){
        payoffs_base.push([payoff_levels[shuffledSequence[i][0]],payoff_levels[shuffledSequence[i][1]]]);
    }
    return payoffs_base;
}

var payoffs_base = get_payoffs_base(shuffledSequence,payoff_levels);

function reshapePayoff(selectedItems) {
    var reshapedItems = [];
    while (selectedItems.length) {
        reshapedItems.push(selectedItems.splice(0, 4));
    }
    var reshapedItemsFinal = [];
    for (var i = 0; i < reshapedItems.length; i++) {
        var e1 = reshapedItems[i].slice(0, 2);
        var e2 = reshapedItems[i].slice(2, 4);
        reshapedItemsFinal.push([e1, e2]);
    }
    return reshapedItemsFinal;
}

function genEpsilon() {
    var repeatedItems = [].concat(...Array(52 * 2).fill([0, 1, 2, 3]));
    repeatedItems.push(0, 3, 0, 3);
    var shuffledItems = jsPsych.randomization.shuffle(repeatedItems)
    var selectedItems = shuffledItems.slice(0, 421);
    return reshapePayoff(selectedItems);
};
var payoffs_noise = genEpsilon();

// var payoffs_shown = Array(payoffs_base.length).fill().map(() => Array(payoffs_base[1].length).fill(0));
var payoffs_shown = [];
for (var i = 0; i < payoffs_base.length; i++) {
    for (var j = 0; j < payoffs_base[1].length; j++) {
        for (var k = 0; k < payoffs_base[1][1].length; k++) {
            payoffs_shown.push(payoffs_base[i][j][k] + payoffs_noise[i][j][k]);
        }
    }
};

payoffs_shown = reshapePayoff(payoffs_shown);

// function getCol(matrix, col) {
//     var column = [];
//     for (var i = 0; i < matrix.length; i++) {
//         column.push(matrix[i][col]);
//     }
//     return column;
// }

//  var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array
//  getCol(array, 0); //Get first column


var get_images = function (shuffledSequence,fractal_images) {
    var color_sequence = [];
    var color_cycle = [0, 1, 2, 3, 4, 5]
    // randomize the colors for each participant
    var color_shuffle = jsPsych.randomization.shuffle(color_cycle);
    var fractal_shuffle = [];
    for (var k = 0; k < 6; k++){
        fractal_shuffle.push(fractal_images[color_shuffle[k]])
    }
    // select the image url according to the sequence
    for (var i = 0; i < shuffledSequence.length; i++){
        color_sequence.push([fractal_shuffle[shuffledSequence[i][0]],fractal_shuffle[shuffledSequence[i][1]]]);
    }
    // var color_sequence = genSequence(fractal_images[color_shuffle[0]], fractal_images[color_shuffle[1]],
    //     fractal_images[color_shuffle[2]], fractal_images[color_shuffle[3]], fractal_images[color_shuffle[4]],
    //     fractal_images[color_shuffle[5]]);
    return color_sequence;
};



// function makeSurveyCode(status) {
//     uploadSubjectStatus(status);
//     var prefix = { 'success': 'cg', 'failed': 'sb' }[status]
//     return `${prefix}${subject_id}`;
// }

function makeSurveyCode(status) {
    uploadSubjectStatus(status);
    var prefix = { 'success': 'cg', 'failed': 'sb' }[status]
    return `${prefix}${subject_id}`;
}

function uploadSubjectStatus(status) {
    $.ajax({
        type: "POST",
        url: "/subject-status",
        data: JSON.stringify({ subject_id, status }),
        contentType: "application/json"
    });
}


/***********************/
/******** Trials *******/
/***********************/


var start_exp_survey_trial = {
    type: 'survey-text',
    questions: [
        { prompt: "What's your worker ID?", rows: 2, columns: 50, required: true },
        { prompt: "What's your age?", rows: 1, columns: 50, required: true },
        { prompt: "What's your gender?", rows: 1, columns: 50, require: true },
    ],
    preamble: `<div>Thanks for choosing our experiment! Please answer the following questions to begin today's study. </div>`,
};



/** full screen */
var fullscreenEnter = {
    type: 'fullscreen',
    message: `<div> Before we begin, please close any unnecessary programs or applications on your computer. <br/>
    This will help the study run more smoothly.    <br/>
    Also, please close any browser tabs that could produce popups or alerts that would interfere with the study.    <br/>
    Finally, once the study has started, <b>DO NOT EXIT</b> fullscreen mode or you will terminate the study and not receive any payment. <br/>   
    <br><br/>
    The study will switch to full screen mode when you press the button below.  <br/>
    When you are ready to begin, press the button.</div>`,
    fullscreen_mode: true,
    on_finish: function () {
        document.body.style.cursor = 'none'
    }
};


var eyeTrackingInstruction1 = {
    type: 'html-keyboard-response',
    stimulus: `<div> <font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                             <br><br/>
                Before we begin with the study, we need to turn on and adjust your webcam for eye-tracking.   <br/>
                
                There are two parts to this process. The first part is calibration and the second part is validation.<br/>
                <br><br/>
                During calibration, you will see a series of dots like this <span id="calibration_dot_instruction"></span> appear on the screen, each for 3 seconds.<br/>
                Your task is simply to stare directly at each dot until it disappears.<br/>
                Then, quickly move your eyes to the next dot and repeat.<br/>
                <br><br/>
                Validation is basically the same as calibration. You simply need to stare at each dot until it turns <b><font color='green'>green</font></b> and disappears.<br/>
                During validation, the dot may turn <b><font color='yellow'>yellow</font></b>, indicating that you don’t seem to be staring directly at it.  <br/>
                Try to keep this from happening! 
                <br><br/>
                When you are ready, press the SPACE BAR to continue. </div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],

}

var eyeTrackingInstruction2 = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                                                                    <br><br/>
                When the calibration begins, you will see a video feed with your face at the top left corner of your screen like this:  <br/>
                <br><br/>
                <img height="220px" width="270px" src="${instruct_img[0]}"><br/>
                <br><br/>
                         Try to keep your entire face within the box. When your face is in a good position, the box will turn <b><font color='green'>green</font></b>. <br/>
                         <font size=5px; font color = 'red';> <b>NOTE</b>: the video feed only appears during calibration.</font><br/>
                         <br><br/>
                         <font size=5px; >When you are ready, press the  <b>SPACE BAR</b> to continue.</font>
              
                         </div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],

}

var eyeTrackingNote = {

    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';> Calibration & Validation</font><br/>
                                                                          <br><br/>
             <font size = 5px font color = "yellow">There are several <b>IMPORTANT</b> tips that are useful for passing the calibration task:<br/></font>
             <img height="200px" width="1000px" src="${instruct_img[1]}"><br/>
             <br><br/>
             <div style="text-align-last:left">
            In addition to the tips in the figure: <br/>
            (1). Use your eyes to look around the screen and try to avoid moving your head. <br/>
            (2). Try to keep lights in front of you rather than behind you so that the webcam can clearly see your face. Avoid sitting with a window behind you. <br/>
            (3). After you have made these adjustments, check again that your face fits nicely within the box on the video feed and that the box is green. <br/></div>
             <br><br/>
             <font size=5px; font color = 'red';> <b>NOTE</b>:  <br/>
            If you are back on this page, it means the calibration and validation did not work as well as we would like.  <br/>
            Please read the tips above again, make any adjustments, and try again.  <br/>
            There are only <b>THREE</b> chances to get this right.  <br/>
            Otherwise, the study cannot proceed and you will only receive 50 cents for participating.  </font><br/>
            <br><br/>
             <font size=5px; >When you are ready, press the <b>SPACE BAR</b> to bring up the video feed and make these adjustments. </font></div>`,
    post_trial_gap: 500,
    choices: ['spacebar'],
    on_finish: function () {
        document.body.style.cursor = 'none'
    }

}


//eye tracking parameters
var calibrationMax = 3;
var calibrationAttempt = 0;
var success = false; //update if there's a success
var eye_calibration_state = {
    doInit: true
};

var init_flag = function () {
    if (calibrationAttempt == 0) {
        return true;
    } else return false;
};

var validationTols = [130, 165, 200];
var validationAccuracys = [0.8, 0.7, 0.6];

/** first we need a calibration and validation step before entering into the main choice task */
var inital_eye_calibration = {
    timeline: [
        eyeTrackingNote,
        {
            type: "eye-tracking",
            doInit: () => init_flag(),
            doCalibration: true,
            doValidation: true,
            calibrationDots: realCaliDot, // change to 12
            calibrationDuration: 3, //change to 5
            doValidation: true,
            validationDots: realCaliDot, //change to 12
            validationDuration: 2,
            validationTol: validationTols[calibrationAttempt],
            // showPoint: true,
            on_finish: function (data) {
                console.log(JSON.parse(data.validationPoints)[0].hitRatio == null);
                if (JSON.parse(data.validationPoints)[0].hitRatio == null) {
                    jsPsych.endExperiment('The study has ended. You may have exited full screen mode, or your browser may not be compatible with our study.');
                } else {
                    calibrationAttempt++;
                    if (data.accuracy >= validationAccuracys[calibrationAttempt - 1]) success = true;
                    if (!success && calibrationAttempt == calibrationMax) {
                        survey_code = makeSurveyCode('failed');
                        closeFullscreen();
                        jsPsych.endExperiment(`Sorry, unfortunately the webcam calibration has failed.  We can't proceed with the study.  </br> You will receive 50 cents for making it this far. Your survey code is: ${survey_code}${payFailCalibration}. Thank you for signing up!`);
                    }
                }
            }
        }
    ],
    loop_function: () => (calibrationAttempt < calibrationMax) && (!success),
};




var experimentOverview = {
    type: 'html-keyboard-response',
    on_start: function () {
        webgazer.pause(),
            webgazer.clearData()
    },
    stimulus: `<div> <font size=120%; font color = 'green';>Experiment Overview </font><br/>
                                                     <br><br/>
                          Success! The calibration and validation were successful. <br/>
                          Now, we will begin with the study.<br/>
                                                        <br><br/>
                          When you are ready, press the  <b>SPACE BAR</b> to continue. </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
}

// number of correct answers for control quiz
function getAnswersQuiz(questions_data){
    var nCorrect = 0;
    var responses = [];
    for(var i = 0; i <questions_data.length; i++){
        responses.push(questions_data[i].responses)
    }
    // var responses = questions_data[0].responses.slice(1,questions_data[0].responses.length-1).split(',');
    var correctAnswers = ["The first payoff for the dark gray square",
                        "The second payoff for the white square",
                        "13",
                        "12",
                        "The light gray square"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
        } else {
            nCorrect = nCorrect + 0;
        }
    }
    return nCorrect;
}

function getFeedbackQuiz(questions_data,q){
    var nCorrect = 0;
    var responses = [];
    var feedback = [];
    for(var i = 0; i <questions_data.length; i++){
        responses.push(questions_data[i].responses)
    }
    // var responses = questions_data[0].responses.slice(1,questions_data[0].responses.length-1).split(',');
    var correctAnswers = ["The first payoff for the dark gray square",
                        "The second payoff for the white square",
                        "13",
                        "12",
                        "The light gray square"];
    for(var i = 0; i < responses.length; i++){
        if(responses[i].includes(correctAnswers[i])){
            nCorrect = nCorrect + 1;
            feedback.push('correct');
        } else {
            nCorrect = nCorrect + 0;
            feedback.push('incorrect');
        }
    }
    return feedback[q-1];
}

function getImgHTML(instructions){
    var imgHTMLInstructions = [];
    var startString = [`<img class = 'img_instructions' src="`];
    var endString = [`"></img>`];
    var elements = [];
    for (var i = 1; i < instructions.length; i++){
        elements[i] = startString.concat(instructions[i],endString);
        imgHTMLInstructions.push(elements[i].join(' '));
    }
    return imgHTMLInstructions;
}

imgHTMLInstructions = getImgHTML(instructions_images);

// display instructions
var learningTaskInstructions = {
    type: 'instructions',
    pages: imgHTMLInstructions,
    show_clickable_nav: true
}

var controlQuizOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div> <font size=120%; font color = 'green';>Quiz Overview </font><br/>
                                                     <br><br/>
                          You will first answer some questions to test your understanding of the instructions.<br/>
                                                        <br><br/>
                          In order to proceed to the study you need to answer 4 out of 5 questions correctly.<br/>
                                                        <br><br/>                              
                          When you are ready, press the  <b>SPACE BAR</b> to continue. </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

// control questions
var question_1_options = ["The first payoff for the dark gray square",
                    "The payoff is not relevant to the task",
                    "The first payoff for the white square",
                    "The second payoff for the dark gray square"];
var question_2_options = ["The payoff is not relevant to the task",
                    "The first payoff for the white square",
                    "The second payoff for the white square",
                    "The first payoff for the dark gray square"];
var question_3_options = ["4",
                    "9",
                    "11",
                    "13"];
var question_4_options = ["12",
                    "16",
                    "13"];
var question_5_options = ["The dark gray square",
                    "The light gray square"];


// highlight correct answer with green and provide explanation at the bottom
var questions_data = [];
var feedback_question_1 = [];
var feedback_question_2 = [];
var feedback_question_3 = [];
var feedback_question_4 = [];
var feedback_question_5 = [];
// question 1
var controlQuestion1 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 1: What does the top number (+4) in Round 31 represent?", name: 'Q1', options: question_1_options, required: true }
    ],
    preamble: `<div> <br><br/>
    Thanks for choosing our experiment! Please answer the following questions to begin today's study.</div>
    <br><br/>
    <div>Consider the following example displaying choices and payoffs from two consecutive rounds of the task.</div>
    <br><br/>
    <div>Round 31 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <div>Round 32 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>`,
    on_finish: function (data) {
        questions_data.push(data);
        if(data.responses.includes("The first payoff for the dark gray square")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};


var controlQuestion1Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_1 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_1){
          return `
          <div>Your answer was <font size=120%; font color = 'green';>correct </font>!</div>
          <br><br/> 
            When you are ready, press the  <b>SPACE BAR</b> to continue. 
            <br><br/> </div>
          `;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';>incorrect </font>!</div>
          <br><br/> 
          <div>Question 1: What does the top number (+4) in Round 31 represent? </div>
          <br><br/> 
            <div>Round 31 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_1.png"></img>
            <div>Round 32 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_2.png"></img>
            <div>
            <br><br/>
            The first payoff for the dark gray square <br>
            The payoff is not relevant to the task <br>
            The first payoff for the white square <br>
            The second payoff for the dark gray square 
            <br><br/>
            The correct answer is: <font color = 'green';>the first payoff for the dark gray square </font>.
            <br><br/>
            In round 31, it can be inferred from the feedback screen that the dark gray square was chosen in that round and the white square was chosen in the previous round. 
            <br><br/>
            Recall that each image will give you 2 payoffs; <br>
            one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
            Therefore, the number +4 on the top image (the dark gray square) represents <font color = 'green';>the first payoff for the dark gray square </font>. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// var controlQuestion1Response = {
//     type: 'html-keyboard-response',
//     stimulus: `
//     <div>Round 31 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_1.png"></img>
//     <div>Round 32 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_2.png"></img>
//     <div>Question 1: What does the top number (+4) in Round 31 represent? 
//     <br><br/>
//     The first payoff for the dark gray square <br>
//     The payoff is not relevant to the task <br>
//     The first payoff for the white square <br>
//     The second payoff for the dark gray square 
//     <br><br/>
//     The correct answer is: <font color = 'green';>the first payoff for the dark gray square </font>.
//     <br><br/>
//     In round 31, it can be inferred from the feedback screen that the dark gray square was chosen in that round and the white square was chosen in the previous round. 
//     <br><br/>
//     Recall that each image will give you 2 payoffs; <br>
//     one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
//     Therefore, the number +4 on the top image (the dark gray square) represents <font color = 'green';>the first payoff for the dark gray square </font>. 
//     <br><br/>
//     When you are ready, press the  <b>SPACE BAR</b> to continue. 
//     <br><br/> </div>`,
//     post_trial_gap: 500,
//     choices: ['spacebar'],
// }

// question 2
var controlQuestion2 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 2: What does the bottom number (+9) in Round 31 represent?", name: 'Q2', options: question_2_options, required: true }
    ],
    preamble: `<div> <br><br/>
    Consider the following example displaying choices and payoffs from two consecutive rounds of the task.</div>
    <br><br/>
    <div>Round 31 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <div>Round 32 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>`,
    on_finish: function (data) {
        questions_data.push(data);
        if(data.responses.includes("The second payoff for the white square")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestion2Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_2 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_2){
          return `
          <div>Your answer was <font size=120%; font color = 'green';>correct </font>!</div>
          <br><br/> 
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';>incorrect </font>!</div>
          <br><br/> 
          <div>Question 2: What does the bottom number (+9) in Round 31 represent? </div>
          <br><br/> 
            <div>Round 31 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_1.png"></img>
            <div>Round 32 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_2.png"></img>
            <div> 
            <br><br/>
            The payoff is not relevant to the task <br>
            The first payoff for the white square <br>
            The second payoff for the white square <br>
            The first payoff for the dark gray square 
            <br><br/>
            The correct answer is: <font color = 'green';> the second payoff for the white square </font>.
            <br><br/>
            In round 31, it can be inferred from the feedback screen that the dark gray square was chosen in that round and the white square was chosen in the previous round. 
            <br><br/>
            Recall that each image will give you 2 payoffs; <br>
            one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
            Therefore, the number +9 on the bottom image (the white square) represents  <font color = 'green';>the second payoff for the white square </font>. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// var controlQuestion2Response = {
//     type: 'html-keyboard-response',
//     stimulus: `
//     <div>Round 31 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_1.png"></img>
//     <div>Round 32 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_2.png"></img>
//     <div> Question 2: What does the bottom number (+9) in Round 31 represent? 
//     <br><br/>
//     The payoff is not relevant to the task <br>
//     The first payoff for the white square <br>
//     The second payoff for the white square <br>
//     The first payoff for the dark gray square 
//     <br><br/>
//     The correct answer is: <font color = 'green';> the second payoff for the white square </font>.
//     <br><br/>
//     In round 31, it can be inferred from the feedback screen that the dark gray square was chosen in that round and the white square was chosen in the previous round. 
//     <br><br/>
//     Recall that each image will give you 2 payoffs; <br>
//     one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
//     Therefore, the number +9 on the bottom image (the white square) represents  <font color = 'green';>the second payoff for the white square </font>. 
//     <br><br/>
//     When you are ready, press the  <b>SPACE BAR</b> to continue. 
//     <br><br/></div>`,
//     post_trial_gap: 500,
//     choices: ['spacebar'],
// }

// question 3
var controlQuestion3 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 3: What is your total payoff for Round 31?", name: 'Q3', options: question_3_options, required: true }
    ],
    preamble: `<div><br><br/>
    Consider the following example displaying choices and payoffs from two consecutive rounds of the task.</div>
    <br><br/>
    <div>Round 31 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <div>Round 32 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>`,
    on_finish: function (data) {
        questions_data.push(data);
        if(data.responses.includes("13")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestion3Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_3 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_3){
          return `
          <div>Your answer was <font size=120%; font color = 'green';>correct </font>!</div>
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';>incorrect </font>!</div>
          <br><br/> 
          <div> Question 3: What is your total payoff for Round 31? </div>
          <br><br/> 
            <div>Round 31 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_1.png"></img>
            <div>Round 32 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_2.png"></img>
            <div>  
            <br><br/>
            4 <br>
            9 <br>
            11 <br>
            13 
            <br><br/>
            The correct answer is: <font color = 'green';> 13 </font>. <br>
            <br><br/>
            Your total payoff in points for a round is the sum of the payoffs for that round. In this case, for round 31 you got: <br>
            + 4 as the first payoff for the dark gray square chosen in that round.<br>
            + 9 as the second payoff for the white square chosen in the previous round.<br>
            Your total payoff is therefore: 4 + 9 = <font color = 'green';> 13 </font>.
          <br><br/> 
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// var controlQuestion3Response = {
//     type: 'html-keyboard-response',
//     stimulus: `
//     <div>Round 31 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_1.png"></img>
//     <div>Round 32 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_2.png"></img>
//     <div> Question 3: What is your total payoff for Round 31? 
//     <br><br/>
//     4 <br>
//     9 <br>
//     11 <br>
//     13 
//     <br><br/>
//     The correct answer is: <font color = 'green';> 13 </font>. <br>
//     <br><br/>
//     Your total payoff in points for a round is the sum of the payoffs for that round. In this case, for round 31 you got: <br>
//     + 4 as the first payoff for the dark gray square chosen in that round.<br>
//     + 9 as the second payoff for the white square chosen in the previous round.<br>
//     Your total payoff is therefore: 4 + 9 = <font color = 'green';> 13 </font>.
//     <br><br/>
//     When you are ready, press the  <b>SPACE BAR</b> to continue. 
//     <br><br/></div>`,
//     post_trial_gap: 500,
//     choices: ['spacebar'],
// }

// question 4
var controlQuestion4 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 4: What is the total payoff of the dark gray square from Round 31 and Round 32?", name: 'Q4', options: question_4_options, required: true }
    ],
    preamble: `
    <div><br><br/>
    Consider the following example displaying choices and payoffs from two consecutive rounds of the task.</div>
    <br><br/>
    <div>Round 31 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <div>Round 32 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>`,
    on_finish: function (data) {
        questions_data.push(data);
        if(data.responses.includes("12")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestion4Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_4 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_4){
          return `
          <div>Your answer was <font size=120%; font color = 'green';>correct </font>!</div>
          <br><br/> 
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';>incorrect </font>!</div>
          <br><br/> 
          <div>Question 4: What is the total payoff of the dark gray square from Round 31 and Round 32? </div>
          <br><br/> 
            <div>Round 31 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_1.png"></img>
            <div>Round 32 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_2.png"></img>
            <div> 
            <br><br/>
            12 <br>
            16 <br>
            13 
            <br><br/>
            The correct answer is: <font color = 'green';> 12 </font>. <br>
            <br><br/>
            Recall that each image will give you 2 payoffs; <br>
            one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
            The dark gray square gives you + 4 in round 31 and + 8 in round 32. <br>
            Therefore, the total payoff for the dark gray square is <font color = 'green';> 12 </font>.
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

// var controlQuestion4Response = {
//     type: 'html-keyboard-response',
//     stimulus: `
//     <div>Round 31 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_1.png"></img>
//     <div>Round 32 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_2.png"></img>
//     <div> Question 4: What is the total payoff of the dark gray square from Round 31 and Round 32? 
//     <br><br/>
//     12 <br>
//     16 <br>
//     13 
//     <br><br/>
//     The correct answer is: <font color = 'green';> 12 </font>. <br>
//     <br><br/>
//     Recall that each image will give you 2 payoffs; <br>
//     one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
//     The dark gray square gives you + 4 in round 31 and + 8 in round 32. <br>
//     Therefore, the total payoff for the dark gray square is <font color = 'green';> 12 </font>.
//     <br><br/>
//     When you are ready, press the  <b>SPACE BAR</b> to continue. 
//     <br><br/></div>`,
//     post_trial_gap: 500,
//     choices: ['spacebar'],
// }

//question 5
var controlQuestion5 = {
    type: 'survey-multi-choice',
    questions: [
        { prompt: "Question 5: What was chosen in Round 32?", name: 'Q5', options: question_5_options, required: true }
    ],
    preamble: `
    <div><br><br/>
    Consider the following example displaying choices and payoffs from two consecutive rounds of the task.</div>
    <br><br/>
    <div>Round 31 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_1.png"></img>
    <div>Round 32 – Feedback screen</div>
    <img class = 'img_questions' src="img/control/control_img_2.png"></img>`,
    on_finish: function (data) {
        questions_data.push(data);
        if(data.responses.includes("The light gray square")){
            data.correct = true; // can add property correct by modify data object directly
          } else {
            data.correct = false;
        }
    }
};

var controlQuestion5Response = {
    type: 'html-keyboard-response',
    stimulus: function(){
        feedback_question_5 = jsPsych.data.get().last(1).values()[0].correct;
        if(feedback_question_5){
          return `
          <div>Your answer was <font size=120%; font color = 'green';>correct </font>!</div>
          <br><br/> 
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`;
        } else {
          return `
          <div>Your answer was <font size=120%; font color = 'red';>incorrect </font>!</div>
          <br><br/> 
          <div> Question 5: What was chosen in Round 32? </div>
          <br><br/> 
            <div>Round 31 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_1.png"></img>
            <div>Round 32 – Feedback screen</div>
            <img class = 'img_questions' src="img/control/control_img_2.png"></img>
            <div> 
            <br><br/>
            The dark gray square <br>
            The light gray square 
            <br><br/>
            The correct answer is: <font color = 'green';> the light gray square </font>. <br>
            <br><br/>
            Recall that each image will give you 2 payoffs; <br>
            one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
            In round 32, it can be inferred from the feedback screen that <font color = 'green';> the light gray square </font> was chosen in that round <br>
            and the dark gray square was chosen in the previous round. 
            <br><br/>
          When you are ready, press the  <b>SPACE BAR</b> to continue. 
          <br><br/> 
          </div>`
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
    on_finish: function (data) {
        nCorrect = getAnswersQuiz(questions_data);
        if(nCorrect<4){
            survey_code = makeSurveyCode('failed');
            closeFullscreen();
            jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrect} questions correctly.  </br> You will receive 50 cents for making it this far. Your survey code is: ${survey_code}${payFailQuiz}. Thank you for signing up!`);
        }
    }
}

// var controlQuestion5Response = {
//     type: 'html-keyboard-response',
//     stimulus: `
//     <div>Round 31 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_1.png"></img>
//     <div>Round 32 – Feedback screen</div>
//     <img class = 'img_questions' src="img/control/control_img_2.png"></img>
//     <div> Question 5: What was chosen in Round 32? 
//     <br><br/>
//     The dark gray square <br>
//     The light gray square 
//     <br><br/>
//     The correct answer is: <font color = 'green';> the light gray square </font>. <br>
//     <br><br/>
//     Recall that each image will give you 2 payoffs; <br>
//     one immediately after your choice (always the top image) and one in the next round (always the bottom image). <br>
//     In round 32, it can be inferred from the feedback screen that <font color = 'green';> the light gray square </font> was chosen in that round <br>
//     and the dark gray square was chosen in the previous round. 
//     <br><br/>
//     When you are ready, press the  <b>SPACE BAR</b> to continue. 
//     <br><br/></div>`,
//     post_trial_gap: 500,
//     choices: ['spacebar'],
//     on_finish: function (data) {
//         nCorrect = getAnswersQuiz(questions_data);
//         if(nCorrect<4){
//             survey_code = makeSurveyCode('failed');
//             closeFullscreen();
//             jsPsych.endExperiment(`We are sorry! Unfortunately, you have answered only ${nCorrect} questions correctly.  </br> You will receive 50 cents for making it this far. Your survey code is: ${survey_code}. Thank you for signing up!`);
//         }
//     }
// }

var learningTaskInstructionsSet = {
    type: 'html-keyboard-response',
    stimulus: function(){
        if(imageSet==1){
          return `
          <div>
          <br><br/> 
          <img class = 'img_questions_set' src="img/instructions2/images_set_1.png"></img> 
          <br><br/> 
          </div>`;
        } else {
          return `
          <div>
          <br><br/> 
          <img class = 'img_questions_set' src="img/instructions2/images_set_2.png"></img> 
          <br><br/> 
          </div>`;
        }
    },
    post_trial_gap: 500,
    choices: ['spacebar'],
}

var choiceInstructionReinforce = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Decision-making Task</font><br/>
                                        <br><br/>
       Now, we will begin with the choice task. Please keep your head still.<br/>
       There will be a break halfway through the task. During the break you can move your head if you need to.    <br/>
                  <br><br/>
       After each choice, make sure to stare at the red circles that will appear on the screen, until they disappear.  <br/>
       This is part of ongoing adjustments to the eye-tracking.    <br/>
       <br><br/>
      When you are ready, press the <b>SPACE BAR</b> to begin. </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500
}

// choice overview
var choiceOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Decision-making Task </font><br/>
                                        <br><br/>
            Each round, you will see two images on the screen. <br/>    
            If you do not choose one within 3 seconds, the computer will choose randomly for you and you will lose 5 points. <br/>   
            To select the left image, press the <b><font color='green'>LEFT</font></b> key. <br/>
            To select the right image, press  the <b><font color='green'>RIGHT</font></b> key. <br/>
            After each choice, stare at the red circle at the center of the screen.  <br/>
            <br><br/>
           When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        webgazer.resume(),
        document.body.style.cursor = 'none';
        img_pairs = get_images(shuffledSequence,fractal_images);
    }
}


var recalibrationInstruction = {
    type: "html-keyboard-response",
    on_start: function () {
        webgazer.resume(),
            document.body.style.cursor = 'none'
    },
    stimulus: `<div>We need to redo the calibration and validation before you begin with the choice task. </br>
   As before, make sure you stare at each dot until it disappears and make sure you don’t move your head.</br>
   <br></br>
   Please press <b>SPACE BAR</b> when you are ready to begin.</div>`,
    choices: ['spacebar'],
    post_trial_gap: 500
};


var recalibration = {
    timeline: [
        recalibrationInstruction,
        {
            type: "eye-tracking",
            doCalibration: true,
            calibrationDots: realCaliDot, // change to 12
            calibrationDuration: 3,
            doValidation: true,
            validationDots: realCaliDot,// change to 12
            validationDuration: 2,
            validationTol: 200
        }
    ],
};



// get random choices in case subject does not make a choice
function getRandomChoices(n){
    var r = []
    for (var i = 0; i < n; i++) {
        r.push(getRandomInt(0,1));
    }
    return r;
}

var rand_choices = getRandomChoices(payoffs_shown.length);

// get images for feedback phase
function getChoiceImg(img_choices){
    if(choice_count!==0){
        var r0 = [];
        var r1 = [];
        // left 
        if(img_choices[choice_count-1].key_press === 37){
            if(img_choices[choice_count].key_press === 37){
                return [img_choices[choice_count].left_stimulus,img_choices[choice_count-1].left_stimulus];
            } else if (img_choices[choice_count].key_press === 39) {
                return [img_choices[choice_count].right_stimulus,img_choices[choice_count-1].left_stimulus];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = img_choices[choice_count].left_stimulus;
                    return [r1,img_choices[choice_count-1].left_stimulus];
                }
                if(rand_choices[choice_count]===1){
                    r1 = img_choices[choice_count].right_stimulus;
                    return [r1,img_choices[choice_count-1].left_stimulus];
                }
            }
        }
        // right
        if(img_choices[choice_count-1].key_press === 39){
            if(img_choices[choice_count].key_press === 37){
                return [img_choices[choice_count].left_stimulus,img_choices[choice_count-1].right_stimulus];
            } else if (img_choices[choice_count].key_press === 39) {
                return [img_choices[choice_count].right_stimulus,img_choices[choice_count-1].right_stimulus];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = img_choices[choice_count].left_stimulus;
                    return [r1,img_choices[choice_count-1].right_stimulus];
                }
                if(rand_choices[choice_count]===1){
                    r1 = img_choices[choice_count].right_stimulus;
                    return [r1,img_choices[choice_count-1].right_stimulus];
                }
            }
        }
        // no choice
        if(img_choices[choice_count-1].key_press !== 39 && img_choices[choice_count-1].key_press !== 37){
            if(rand_choices[choice_count-1]===0){
                r0 = img_choices[choice_count].left_stimulus;
            }
            if(rand_choices[choice_count-1]===1){
                r0 = img_choices[choice_count].right_stimulus;
            }
            //replace with random selection
            if(img_choices[choice_count].key_press === 37){
                return [img_choices[choice_count].left_stimulus,r0];
            }
            if(img_choices[choice_count].key_press === 39){
                return [img_choices[choice_count].right_stimulus,r0];
            } 
            if(img_choices[choice_count].key_press !== 39 && img_choices[choice_count].key_press !== 37){
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = img_choices[choice_count].left_stimulus;
                }
                if(rand_choices[choice_count]===1){
                    r1 = img_choices[choice_count].right_stimulus;
                }
                return [r1,r0];
            } 
        }
    // trial 1    
    } else {
        if(img_choices[choice_count].key_press === 37){
            return [img_choices[choice_count].left_stimulus,blank_image[0]];
        } else if (img_choices[choice_count].key_press === 39){
            return [img_choices[choice_count].right_stimulus,blank_image[0]];
        } else {
            //replace with random selection
            if(rand_choices[choice_count]===0){
                r1 = img_choices[choice_count].left_stimulus;
                return [r1,blank_image[0]];
            }
            if(rand_choices[choice_count]===1){
                r1 = img_choices[choice_count].right_stimulus;
                return [r1,blank_image[0]];
            }
        }
    }
}

//get feedback points to display on the images
function getPointsImg(img_choices){
    var r0 = [];
    var r1 = [];
    if(choice_count!==0){
        // left 
        if(img_choices[choice_count-1].key_press === 37){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_shown[choice_count][0][0],payoffs_shown[choice_count-1][0][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_shown[choice_count][1][0],payoffs_shown[choice_count-1][0][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_shown[choice_count][0][0];
                    return [r1,payoffs_shown[choice_count-1][0][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_shown[choice_count][1][0];
                    return [r1,payoffs_shown[choice_count-1][0][1]];
                }
            }
        }
        //right
        if(img_choices[choice_count-1].key_press === 39){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_shown[choice_count][0][0],payoffs_shown[choice_count-1][1][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_shown[choice_count][1][0],payoffs_shown[choice_count-1][1][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_shown[choice_count][0][0];
                    return [r1,payoffs_shown[choice_count-1][1][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_shown[choice_count][1][0];
                    return [r1,payoffs_shown[choice_count-1][1][1]];
                }
            }
        }
        // no choice
        if(img_choices[choice_count-1].key_press !== 39 && img_choices[choice_count-1].key_press !== 37){
            if(rand_choices[choice_count-1]===0){
                r0 = payoffs_shown[choice_count-1][0][1];
            }
            if(rand_choices[choice_count-1]===1){
                r0 = payoffs_shown[choice_count-1][1][1];
            }
            //replace with random selection
            if(img_choices[choice_count].key_press === 37){
                return [payoffs_shown[choice_count][0][0],r0];
            }
            if(img_choices[choice_count].key_press === 39){
                return [payoffs_shown[choice_count][1][0],r0];
            } 
            if(img_choices[choice_count].key_press !== 39 && img_choices[choice_count].key_press !== 37){
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_shown[choice_count][0][0];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_shown[choice_count][1][0];
                }
                return [r1,r0];
            } 
        }
    // trial 1
    } else {
        if(img_choices[choice_count].key_press === 37){
            // immediate payoff for left (current choice)
            return [payoffs_shown[choice_count][0][0],0];
        } else if (img_choices[choice_count].key_press === 39){
            // immediate payoff for right (current choice)
            return [payoffs_shown[choice_count][1][0],0];
        } else {
            //replace with random selection
            if(rand_choices[choice_count]===0){
                r1 = payoffs_shown[choice_count][0][0];
            }
            if(rand_choices[choice_count]===1){
                r1 = payoffs_shown[choice_count][1][0];
            }
            return [r1,0]
        }
    }
}

//get feedback underlying points and noise
function getPointsBase(img_choices){
    var r0 = [];
    var r1 = [];
    if(choice_count!==0){
        // left 
        if(img_choices[choice_count-1].key_press === 37){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_base[choice_count][0][0],payoffs_base[choice_count-1][0][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_base[choice_count][1][0],payoffs_base[choice_count-1][0][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_base[choice_count][0][0];
                    return [r1,payoffs_base[choice_count-1][0][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_base[choice_count][1][0];
                    return [r1,payoffs_base[choice_count-1][0][1]];
                }
            }
        }
        //right
        if(img_choices[choice_count-1].key_press === 39){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_base[choice_count][0][0],payoffs_base[choice_count-1][1][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_base[choice_count][1][0],payoffs_base[choice_count-1][1][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_base[choice_count][0][0];
                    return [r1,payoffs_base[choice_count-1][1][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_base[choice_count][1][0];
                    return [r1,payoffs_base[choice_count-1][1][1]];
                }
            }
        }
        // no choice
        if(img_choices[choice_count-1].key_press !== 39 && img_choices[choice_count-1].key_press !== 37){
            if(rand_choices[choice_count-1]===0){
                r0 = payoffs_base[choice_count-1][0][1];
            }
            if(rand_choices[choice_count-1]===1){
                r0 = payoffs_base[choice_count-1][1][1];
            }
            //replace with random selection
            if(img_choices[choice_count].key_press === 37){
                return [payoffs_base[choice_count][0][0],r0];
            }
            if(img_choices[choice_count].key_press === 39){
                return [payoffs_base[choice_count][1][0],r0];
            } 
            if(img_choices[choice_count].key_press !== 39 && img_choices[choice_count].key_press !== 37){
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_base[choice_count][0][0];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_base[choice_count][1][0];
                }
                return [r1,r0];
            } 
        }
    // trial 1
    } else {
        if(img_choices[choice_count].key_press === 37){
            // immediate payoff for left (current choice)
            return [payoffs_base[choice_count][0][0],0];
        } else if (img_choices[choice_count].key_press === 39){
            // immediate payoff for right (current choice)
            return [payoffs_base[choice_count][1][0],0];
        } else {
            //replace with random selection
            if(rand_choices[choice_count]===0){
                r1 = payoffs_base[choice_count][0][0];
            }
            if(rand_choices[choice_count]===1){
                r1 = payoffs_base[choice_count][1][0];
            }
            return [r1,0]
        }
    }
}


//get feedback underlying points and noise
function getPointsNoise(img_choices){
    var r0 = [];
    var r1 = [];
    if(choice_count!==0){
        // left 
        if(img_choices[choice_count-1].key_press === 37){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_noise[choice_count][0][0],payoffs_noise[choice_count-1][0][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for left (previous choice)
                return [payoffs_noise[choice_count][1][0],payoffs_noise[choice_count-1][0][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_noise[choice_count][0][0];
                    return [r1,payoffs_noise[choice_count-1][0][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_noise[choice_count][1][0];
                    return [r1,payoffs_noise[choice_count-1][0][1]];
                }
            }
        }
        //right
        if(img_choices[choice_count-1].key_press === 39){
            if(img_choices[choice_count].key_press === 37){
                // immediate payoff for left (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_noise[choice_count][0][0],payoffs_noise[choice_count-1][1][1]];
            } else if (img_choices[choice_count].key_press === 39) {
                // immediate payoff for right (current choice)
                // delayed payoff for right (previous choice)
                return [payoffs_noise[choice_count][1][0],payoffs_noise[choice_count-1][1][1]];
            } else {
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_noise[choice_count][0][0];
                    return [r1,payoffs_noise[choice_count-1][1][1]];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_noise[choice_count][1][0];
                    return [r1,payoffs_noise[choice_count-1][1][1]];
                }
            }
        }
        // no choice
        if(img_choices[choice_count-1].key_press !== 39 && img_choices[choice_count-1].key_press !== 37){
            if(rand_choices[choice_count-1]===0){
                r0 = payoffs_noise[choice_count-1][0][1];
            }
            if(rand_choices[choice_count-1]===1){
                r0 = payoffs_noise[choice_count-1][1][1];
            }
            //replace with random selection
            if(img_choices[choice_count].key_press === 37){
                return [payoffs_noise[choice_count][0][0],r0];
            }
            if(img_choices[choice_count].key_press === 39){
                return [payoffs_noise[choice_count][1][0],r0];
            } 
            if(img_choices[choice_count].key_press !== 39 && img_choices[choice_count].key_press !== 37){
                //replace with random selection
                if(rand_choices[choice_count]===0){
                    r1 = payoffs_noise[choice_count][0][0];
                }
                if(rand_choices[choice_count]===1){
                    r1 = payoffs_noise[choice_count][1][0];
                }
                return [r1,r0];
            } 
        }
    // trial 1
    } else {
        if(img_choices[choice_count].key_press === 37){
            // immediate payoff for left (current choice)
            return [payoffs_noise[choice_count][0][0],0];
        } else if (img_choices[choice_count].key_press === 39){
            // immediate payoff for right (current choice)
            return [payoffs_noise[choice_count][1][0],0];
        } else {
            //replace with random selection
            if(rand_choices[choice_count]===0){
                r1 = payoffs_noise[choice_count][0][0];
            }
            if(rand_choices[choice_count]===1){
                r1 = payoffs_noise[choice_count][1][0];
            }
            return [r1,0]
        }
    }
}

var binary_choice_states = {
    //set the default 
    doCalibration: false,
    calibrationDots: 10,
    dovalidation: true,
    validationDots: 2
};

var validate_counter = 0;
validationAccuracy = 0.6;

function binary_choice_state_logger(finish_data_accuracy) {
    // ...TODO
    if (finish_data_accuracy >= validationAccuracy) {
        binary_choice_states = {
            doCalibration: false,
            dovalidation: true,
            validationDots: 2
        },
            validate_counter = 0;
    }
    if (finish_data_accuracy < validationAccuracy & validate_counter <= 2) {
        binary_choice_states = {
            doCalibration: false,
            dovalidation: true,
            validationDots: 2
        },
            validate_counter += 1;
    }
    if (validate_counter == 3) {
        binary_choice_states = {
            //set the default 
            doCalibration: true,
            calibrationDots: 12, ///change to 12
            dovalidation: false,
        }
        validate_counter = 0;
    }
};

var binary_state_updater = function () {
    return binary_choice_states;
};



/** choices */
var choiceImgLast = [];
var pointsImgLast = [];
var pointsBaseLast = [];
var pointsNoiseLast = [];
var feedback_count = 0;
var choice_count = 0;
// data
var img_choices = [];
var feedback_data = [];

var fixation = {
    type: "eye-tracking",
    doInit: false,
    // doCalibration: () => binary_state_updater().doCalibration,
    doCalibration: false,
    //calibrationDots: () => binary_state_updater().calibrationDots,
    // doValidation: () => binary_state_updater().dovalidation,
    doValidation: true,
    // validationDots: () => binary_state_updater().validationDots,
    validationDots: 3,
    validationTol: 130,
    validationDuration: 2,
    //  calibrationDuration: 5,
    on_finish: (data) => binary_choice_state_logger(data.accuracy)
};

var fixation1 = {
    type: 'html-keyboard-response',
    on_start: () => document.body.style.cursor = 'none',
    stimulus: '<span id="calibration_dot_instruction"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: fixation1_duration[choice_count]
};

var fixation2 = {
    type: 'html-keyboard-response',
    on_start: () => document.body.style.cursor = 'none',
    stimulus: '<span id="calibration_dot_instruction"></span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: fixation2_duration[feedback_count]
};



// change to 21 for the real task
var if_node1 = {
    timeline: [fixation],
    conditional_function: function () {
        if (Math.round(choice_count % 21) == 0 && choice_count > 0) {
            return true;
        } else {
            return false;
        }
    }
}


var if_node2 = {
    timeline: [fixation1],
    conditional_function: function () {
        if (Math.round(choice_count % 21) != 0) {
            return true;
        } else {
            return false;
        }
    }
}


// trials - part 1 
var learning_choice_1 = {
    timeline: [
        if_node1,
        if_node2,
        // fixation1,
        {
            type: "binary-choice",
            stimulus: () => img_pairs[choice_count],
            choices: ["leftarrow", "rightarrow"],
            timing_response: 3000, // 3000
            realOrPrac: false,
            stimulus_duration: 3000, // 3000
            exp_condition: condition,
            exp_image_set: imageSet,
            stimulus_left_payoff_base: () => payoffs_base[choice_count][0],
            stimulus_left_payoff_noise: () => payoffs_noise[choice_count][0],
            stimulus_right_payoff_base: () => payoffs_base[choice_count][1],
            stimulus_right_payoff_noise: () => payoffs_noise[choice_count][1],
            on_finish: function (data) {
                img_choices.push(data);
                choiceImgLast = getChoiceImg(img_choices);
                pointsImgLast = getPointsImg(img_choices);
                pointsBaseLast = getPointsBase(img_choices);
                pointsNoiseLast = getPointsNoise(img_choices);
                choice_count++;
            }
        },
        fixation2,
        {
            type: "binary-feedback",
            stimulus: () => choiceImgLast,
            points: () => pointsImgLast,
            choices: jsPsych.NO_KEYS,
            realOrPrac: false,
            exp_condition: condition,
            exp_image_set: imageSet,
            stimulus_top_payoff_base: () => pointsBaseLast[0],
            stimulus_top_payoff_noise: () => pointsNoiseLast[0],
            stimulus_bottom_payoff_base: () => pointsBaseLast[1],
            stimulus_bottom_payoff_noise: () => pointsNoiseLast[1],
            on_finish: function (data) {
                feedback_data.push(data)
                feedback_count++;
            },
            timing_response: feedbackDuration
        }        
    ],
    loop_function: () => choice_count < 63, //63
};


// trials - part 2

// break for recalibration
var breaktime = {
    type: "html-keyboard-response",
    stimulus: `<div>You are halfway done! Now you can take a short break if you want. You can move your head during the break.</br>
             <br></br>
             When you are ready to continue the study, press the <b>SPACE BAR</b>.</div>`,
    choices: ['spacebar'],
    on_start: function () {
        webgazer.pause(),
        webgazer.clearData()
    },
    post_trial_gap: 500,
};


var recalibrationInstruction2 = {
    type: "html-keyboard-response",
    on_start: () => webgazer.resume(),
    stimulus: `<div>We need to redo the calibration and validation before you return to the study.  </br>
    As before, make sure you stare at each dot until it disappears and make sure you don’t move your head.</br>
    <br></br>
    Press the <b>SPACE BAR</b> when you are ready to begin.</div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
};


var recalibration2 = {
    timeline: [
        recalibrationInstruction2,
        {
            type: "eye-tracking",
            doInit: () => init_flag(),
            IsInterTrial: true,
            doCalibration: true,
            calibrationDots: realCaliDot, // change to 12
            calibrationDuration: 3,
            doValidation: true,
            validationDots: realCaliDot,// change to 12
            validationDuration: 2,
            validationTol: 200
        }
    ],
};


var learning_choice_2 = {
    timeline: [
        if_node1,
        if_node2,
        // fixation1,
        {
            type: "binary-choice",
            stimulus: () => img_pairs[choice_count],
            choices: ["leftarrow", "rightarrow"],
            timing_response: 3000, // 3000
            realOrPrac: false,
            stimulus_duration: 3000, // 3000
            exp_condition: condition,
            exp_image_set: imageSet,
            stimulus_left_payoff_base: payoffs_base[choice_count][0],
            stimulus_left_payoff_noise: payoffs_noise[choice_count][0],
            stimulus_right_payoff_base: payoffs_base[choice_count][1],
            stimulus_right_payoff_noise: payoffs_noise[choice_count][1],
            on_finish: function (data) {
                img_choices.push(data);
                choiceImgLast = getChoiceImg(img_choices);
                pointsImgLast = getPointsImg(img_choices);
                pointsBaseLast = getPointsBase(img_choices);
                pointsNoiseLast = getPointsNoise(img_choices);
                choice_count++;
            }
        },
        fixation2,
        {
            type: "binary-feedback",
            stimulus: () => choiceImgLast,
            points: () => pointsImgLast,
            choices: jsPsych.NO_KEYS,
            realOrPrac: false,
            exp_condition: condition,
            exp_image_set: imageSet,
            stimulus_top_payoff_base: () => pointsBaseLast[0],
            stimulus_top_payoff_noise: () => pointsNoiseLast[0],
            stimulus_bottom_payoff_base: () => pointsBaseLast[1],
            stimulus_bottom_payoff_noise: () => pointsNoiseLast[1],
            on_finish: function () {
                feedback_data.push(data)
                feedback_count++;
            },
            timing_response: feedbackDuration
        }        
    ],
    loop_function: () => choice_count < payoffs_base.length, // payoffs_base.length
};



// memory quiz overview
var memoryOverview = {
    type: 'html-keyboard-response',
    stimulus: `<div><font size=120%; font color = 'green';>Part 2 Questionnaire </font><br/>
                                        <br><br/>
            You have completed the task! <br/>      
            In the following part, you will answer some questions about the task.<br/>
            <br><br/>
            When you are ready, press the  <b>SPACE BAR</b> to continue.  </div>`,
    choices: ['spacebar'],
    post_trial_gap: 500,
    on_finish: function () {
        document.body.style.cursor = 'pointer';
    }
}

// memory quiz
var optionsQuizPart1 = ["A", "B", "C", "D", "E", "F"];
var memoryQuizPart1 = {
    type: 'survey-multi-select',
    questions: [
      {
        prompt: "Which of these images was associated with the highest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q1'
      }, 
      {
        prompt: "Which of these images was associated with the second highest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q2'
      }, 
      {
        prompt: "Which of these images was associated with the third highest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q3'
      }, 
      {
        prompt: "Which of these images was associated with the fourth highest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q4'
      }, 
      {
        prompt: "Which of these images was associated with the fifth highest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q5'
      }, 
      {
        prompt: "Which of these images was associated with the lowest number of points?", 
        options: optionsQuizPart1, 
        horizontal: true,
        required: true,
        name: 'P1Q6'
      }
    ], 
    randomize_question_order: false,
    preamble: `<div> 
        <br><br/>
        Please answer the following questions.</div>
        <br><br/>
        <div>Consider the following images from the experiment.</div>
    </div>
    <br><br/>
    <img class = 'img_memory_questions' src="${memory_images[0]}"></img>
    <br><br/>
    </div>`
};

var optionsQuizPart2 = [
    "1st payoff larger", 
    "equal payoffs", 
    "2nd payoff larger"
  ];
  
  var memoryQuizPart2 = {
    type: 'survey-likert',
    questions: [
      {prompt: "Image A:", name: 'P2Q1', labels: optionsQuizPart2},
      {prompt: "Image B:", name: 'P2Q2', labels: optionsQuizPart2},
      {prompt: "Image C:", name: 'P2Q3', labels: optionsQuizPart2},
      {prompt: "Image D:", name: 'P2Q4', labels: optionsQuizPart2},
      {prompt: "Image E:", name: 'P2Q5', labels: optionsQuizPart2},
      {prompt: "Image F:", name: 'P2Q6', labels: optionsQuizPart2}
    ],
    randomize_question_order: false,
    scale_width: 500,
    preamble: `<div> 
        <br><br/>
        Please answer the following questions.</div>
        <br><br/>
        <div>Consider the following images from the experiment.</div>
    </div>
    <br><br/>
    <img class = 'img_memory_questions' src="${memory_images[0]}"></img>
    <br><br/>
    <div>For which image was the first payoff larger than the second payoff? <br>
    For which image was the first payoff smaller than the second payoff? <br>
    For which image were the first and second payoffs equal?</div>
    <br><br/>
    </div>`
  };

  var memoryQuizPart3 = {
    type: 'survey-text',
    questions: [
        { prompt: "Number of points for image A", rows: 1, columns: 30, required: true },
        { prompt: "Number of points for image B", rows: 1, columns: 30, required: true },
        { prompt: "Number of points for image C", rows: 1, columns: 30, required: true },
        { prompt: "Number of points for image D", rows: 1, columns: 30, required: true },
        { prompt: "Number of points for image E", rows: 1, columns: 30, required: true },
        { prompt: "Number of points for image F", rows: 1, columns: 30, required: true }   
    ],
    preamble: `<div> 
    <br><br/>
    Please answer the following questions.</div>
    <br><br/>
    <div>Consider the following images from the experiment.</div>
    </div>
    <br><br/>
    <img class = 'img_memory_questions' src="${memory_images[0]}"></img>
    <br><br/>
    <div>Please estimate how many points each color gave you <br>
    (estimate the total number of points, adding the 1st and 2nd payoff together). <br>
    <br><br/>
    Since the number of points varied randomly from one round to the next in addition to their fixed payoffs, <br>
    please give your estimate of the average payoff or middle payoff.</div>
    <br><br/>
    </div>`,
};




function getPointsEarned(img_choices,payoffs_shown){
    var points_earned = 0;
    const penalty_points = 5;
    for (var i = 0; i < img_choices.length; i++){
        if(img_choices[i].key_press === 37){
            points_earned = points_earned + payoffs_shown[i][0][0] + payoffs_shown[i][0][1];
        } else if(img_choices[i].key_press === 39){
            points_earned = points_earned + payoffs_shown[i][1][0] + payoffs_shown[i][1][1];
        } else {
            // (img_choices[i].key_press !== 39 && img_choices[i].key_press !== 37)
            points_earned = points_earned - penalty_points;
        }
    }
    return points_earned;
}

function getPayoffEarned(points_earned){
    const minPayoff = 2.5; // min earnings = 2.5
    const thresholdPay = 1505;
    var payoff_earned = [];
    payoff_earned = 0.02*(points_earned - thresholdPay); // max earnings - max possible points 350
    if(payoff_earned<=minPayoff) {
        return minPayoff;
    } else {
        return payoff_earned.toFixed(2);
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// var select_trial = {
//   type: "",
//   charity: [],
//   donation: 5
// }
// var randomselector = function () {
//     var trials = jsPsych.data.get().filterCustom(function (trial) {
//         return trial.rating > 0 || (trial.trial_type == "binary-choice" && trial.realtrial)
//     })
//     selectedtrialindex = getRandomInt(0, trials.count() - 1);
//     selectedtrial = JSON.parse(trials.json())[selectedtrialindex];

//     select_trial.type = selectedtrial.trial_type;
//     //console.log(JSON.parse(trials.json())[selectedtrialindex]);

//     if (select_trial.type === "image-slider-response") {
//         select_trial.type = "Willingness to Donate"
//         select_trial.donation = selectedtrial.rating;
//         select_trial.charity = selectedtrial.stimulus;
//     } else {
//         select_trial.type = "Donating Preference"
//         select_trial.donation = 5;
//         if (selectedtrial.key_press == 70) {
//             select_trial.charity = selectedtrial.stimulus[0];
//         } else {
//             select_trial.charity = selectedtrial.stimulus[1];
//         }
//     }
//     html = ` <div> One trial from the <b><font color='red'>${select_trial.type}</font></b> task has been selected for donation! </br>
//     The charity you donate to is: </br>
//     <br></br>
//     <img height="300px" width="500px" src="${select_trial.charity}"/> </br>
//      <br></br>
//      We will donate  <b><font color='red'>$${select_trial.donation}</font></b> to this charity on your behalf.</br>
//      <br></br>
//      Thank you for participating! The webcam will turn off when you close the browser tab.</br>
//      Your quiz score is ${(quiz_correct_count / 5) * 100}, we will add ${quiz_correct_count * 10} cents to your final payment.</br>
//      Your survey code is: ${makeSurveyCode('success')}
//      </div>`;
//     return html
// }

var pay = 0;
var points = 0;
var successExp = false
var success_guard = {
    type: 'call-function',
    func: () => { 
        successExp = true;
        points = getPointsEarned(img_choices,payoffs_shown);
        pay = getPayoffEarned(points);
     }
}



// // `<p>You have completed the task. The webcam will be closed when you close our browser.</p>`
//  var end = {
//    on_start: () => closeFullscreen(),
//   type: "html-keyboard-response",
//   stimulus: `<div>Thank you for your participation! You can close the browser to end the experiment now. </br>
//                   The webcam will turn off when you close the browser. </br>
//                   Your survey code is: ${makeSurveyCode('success')}. </br>
//                   We will send you $7 as your participant fee soon! </br> </div>`,

//  };

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}


var on_finish_callback = function () {
    // jsPsych.data.displayData();
    jsPsych.data.addProperties({
        browser_name: bowser.name,
        browser_type: bowser.version,
        subject: subject_id,
        subject: subject_id,
        interaction: jsPsych.data.getInteractionData().json(),
        points_total: points,
        payment: pay,
        windowWidth: screen.width,
        windowHight: screen.height
    });
    var data = JSON.stringify(jsPsych.data.get().values());
    $.ajax({
        type: "POST",
        url: "/data",
        data: data,
        contentType: "application/json"
    })
        .done(function () {
            // alert("your data has been saved!")
        })
        .fail(function () {
            //alert("problem occured while writing data to box.");
        })
}

var trialcounter;






function startExperiment() {
    jsPsych.init({
        timeline: [
            start_exp_survey_trial,
            fullscreenEnter,
            learningTaskInstructions,
            controlQuizOverview,
            controlQuestion1,
            controlQuestion1Response,
            controlQuestion2,
            controlQuestion2Response,
            controlQuestion3,
            controlQuestion3Response,
            controlQuestion4,
            controlQuestion4Response,
            controlQuestion5,
            controlQuestion5Response,
            eyeTrackingInstruction1, 
            eyeTrackingInstruction2, 
            inital_eye_calibration,
            experimentOverview,
            learningTaskInstructionsSet,
            choiceInstructionReinforce,
            choiceOverview,
            // recalibration,
            learning_choice_1,
            breaktime,
            recalibration2,
            learning_choice_2,
            memoryOverview,
            memoryQuizPart1,
            memoryQuizPart2,
            memoryQuizPart3,
            success_guard
        ],
        on_trial_finish: function () {
            trialcounter = jsPsych.data.get().count();
            if (successExp) {
                closeFullscreen()
                document.body.style.cursor = 'pointer'
                jsPsych.endExperiment(`<div>
                Thank you for your participation! You can close the browser to end the experiment now. </br>
                The webcam will turn off when you close the browser. </br>
                Your survey code is: ${makeSurveyCode('success')}${pay*100} </br>
                We will send you $ ${pay} as your participant fee soon! </br> 
                </div>`);
            }
            if (trialcounter == 21) {
                on_finish_callback();
                jsPsych.data.reset();
            }
        },
        preload_images: [instructions_images, instructions_image_set, fractal_images, blank_image, control_images, memory_images, instruct_img],
        on_finish: () => on_finish_callback(),
        on_close: () => on_finish_callback()

    });
};

function saveData() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            //   console.log(response.success);
        }
    };
    xhr.send(jsPsych.data.get().json());
}