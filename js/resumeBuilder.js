var bio = {
	"name": "Subramanya Rajendra",
	"role": "Lead Software Engineer",
	"contacts": {
		"email": "subramanya.muthinti@gmail.com",
		"github": "developersrk",		
		"location": "Hyderabad, Telangana, India"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "Working as a Lead Software Engineer in Hyderabad, Telangana, India.  Thanks for stopping by!",
	"skills": ["C", "C++", "Java", "Algorithms", "SQL"]
};

var work = {
	"jobs": [
		{
			"employer": "Informatica",
			"title": "Lead Software Engineer",
			"location": "Hyderabad, Telangana, India",
			"datesWorked": "October 2015 - Till date",
			"description": "I was hired to work for a product called IDV, which involved knowledge in C++ development, SQL."+
				"I had good experience with some of these so I learned quickly to become "+
				"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
				"the business.  I am enjoying my time at Informatica and learning a tremendous amount "+
				"from everything I am worked on."
		},
		{
			"employer": "Progress Software",
			"title": "Principal Software Engineer",
			"location": "Hyderabad, Telangana, India",
			"datesWorked": "November 2009 - October 2015",
			"description": "My primary responsibilities involve all aspects of developing and supporting a product called " +
				"OpenAccess SDK in a languages including Java, C++ and C. " +
				"This work includes, but is not limited to, query processing, software architecture design, high level and " +
				"detailed estimates as well as peer review of submitted work. I am also very involved in encouraging " +
			"communication and collaboration within the team and have experience giving technical presentations as well " +
			"as facilitating project retrospective discussions."
		},
		{
			"employer": "TCS",
			"title": "Assistant Systems Engineer",
			"location": "Mumbai, Maharashtra, India",
			"datesWorked": "September 2007 - November 2009",
			"description": "I was part of a team responsible for developing and implementing the a telecom Protocol for Mobile Telephone Exchange to establish a sessions. When a new feature/request is received from customer the Planning team first analyzes the feature/request and comes up with the design estimates for the request. Then that feature is developed and coded. I am responsible for handling change requests raised by the customer to meet the dynamically changing needs."
		},
	]
};


var education = {
	"schools": [
		{ "name": "Jawaharlal Nehru Technological University",
			"datesAttended": "2004 - 2007",
			"location": "Kakinada, Andhra Pradesh, India",
			"degree": "Master of Computer Applications",
			"major": "Computer Science",			
			"url": "http://jntuk.edu.in/"
		},
		
		{ "name": "Andhra University",
			"datesAttended": "2001 - 2004",
			"location": "Kakinada, Andhra Pradesh, India",
			"degree": "Bachelor of Science",
			"major": "Computer Science",			
			"url": "http://www.andhrauniversity.edu.in/"
		},		
	]	
};

var projects = {
	"projects": [		
		{
			"title": "Online Portfolio",
			"datesWorked": "December 2015",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"]			
		}		
	]
};

var googleMap = '<div id="mapDiv"></div>'; 
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);			
		}
	}
}

projects.display();


education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);			
		}		
		
	}
}

education.display();
$("#mapDiv").append(googleMap);


