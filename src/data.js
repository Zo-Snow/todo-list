const sampleObject = {
    projects: [
        { title: "Sample Project",
          projectTodos: [{title: "Start todo project", dueDate: "11-Aug-7024", description: "Basically this is the sample todo for my website testing :)", urgency: "high", status: false },
                         {title: "Finish todo project", dueDate: "23-Jan-2024", description: "In this one basically yea we have to check if project is finished :3", urgency: "medium", status:  false}]
        },
    
        { title: "Another Sample Project",
          projectTodos: [{title: "Hug lots of kitties", dueDate: "29-Sep-2024", description: "Make sure to hug em, and pat em too", urgency: "low" , status:  false},
                         {title: "Take sufficient zZzzs", dueDate: "29-Jul-2024", description: "Take care of your health and sleep well!", urgency: "high" , status:  false}]
        },
    ],

    todays: [
        {title: "Buy milk", dueDate: "Today", description: "Go buy milk before your dad goes to buy it.. A Sample task for todays tasks", urgency: "high" , status:  false},
    ],
    upcoming: [
        {title: "live lol", dueDate: "01-jan-2030", description: "idk? thats an upcoming thing for idk how much time lol.. A Sample task for upcoming tasks", urgency: "medium" , status:  false}
    ],
}

export default sampleObject;

