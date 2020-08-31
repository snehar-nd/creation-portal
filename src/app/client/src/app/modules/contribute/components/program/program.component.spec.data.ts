export const addParticipentResponseSample = {
  id: 'api.add.participants',
  params: {
    status: 'successful'
  },
  responseCode: 'OK',
  result: {
    created: 'OK',
    programId: '6835f250-1fe1-11ea-93ea-2dffbaedca40'
  },
  ts: '2019-12-17T10:10:16.555Z',
  ver: '1.0'
};
export const frameWorkData = {
  'err': null,
  'frameworkdata': {
    'NCFCOPY': {
      'identifier': 'NCFCOPY',
      'code': 'NCFCOPY',
      'translations': '{"hi":"एनसीएफ कॉपी","ka":"ncf ನಕಲಿಸಿ"}',
      'name': 'AP Board',
      'description': ' NCF framework..',
      'categories': [
        {
          'identifier': 'ncfcopy_board',
          'code': 'board',
          'terms': [
            {
              'associations': [
                {
                  'identifier': 'ncfcopy_gradelevel_kindergarten',
                  'code': 'kindergarten',
                  'translations': '{"hi":"बाल विहार"}',
                  'name': 'Kindergarten',
                  'description': '',
                  'category': 'gradeLevel',
                  'status': 'Live'
                },
              ],
              'identifier': 'ncfcopy_board_ncert',
              'code': 'ncert',
              'translations': null,
              'name': 'NCERT',
              'description': '',
              'index': 1,
              'category': 'board',
              'status': 'Live'
            },
          ],
          'translations': null,
          'name': 'Curriculum',
          'description': '',
          'index': 1,
          'status': 'Live'
        },
        {
          'identifier': 'ncfcopy_medium',
          'code': 'medium',
          'translations': '{"hi":"मध्यम"}',
          'name': 'Medium',
          'description': '',
          'index': 2,
          'status': 'Live'
        },
        {
          'identifier': 'ncfcopy_subject',
          'code': 'subject',
          'terms': [
            {
              'identifier': 'ncfcopy_subject_mathematics',
              'code': 'mathematics',
              'children': [
                {
                  'identifier': 'ncfcopy_subject_arithmetics',
                  'code': 'arithmetics',
                  'translations': null,
                  'name': 'Arithmetics',
                  'description': 'Arithmetics',
                  'index': 1,
                  'category': 'subject',
                  'status': 'Live'
                }
              ],
              'translations': null,
              'name': 'Math',
              'description': 'Mathematics',
              'index': 1,
              'category': 'subject',
              'status': 'Live'
            },
            {
              'identifier': 'ncfcopy_subject_malayalam',
              'code': 'malayalam',
              'translations': null,
              'name': 'Malayalam',
              'description': '',
              'index': 22,
              'category': 'subject',
              'status': 'Live'
            }
          ],
          'translations': '{"hi":"विषय"}',
          'name': 'Subject',
          'description': '',
          'index': 4,
          'status': 'Live'
        },
      ],
      'type': 'K-12',
      'objectType': 'Framework'
    }
  }
};

const onBoardingForm =  {
  'action': 'onboard',
  'fields': [
    {
      'code': 'class',
      'dataType': 'text',
      'description': 'Class',
      'displayProperty': 'Editable',
      'index': 1,
      'inputType': 'select',
      'label': 'Class',
      'name': 'Class',
      'range': [
        {
          'category': 'class',
          'code': 'class1',
          'description': 'Class 1',
          'identifier': 'Class 1',
          'index': 1,
          'name': 'Class 1',
          'status': 'Live'
        },
        {
          'category': 'class',
          'code': 'class2',
          'description': 'Class 2',
          'identifier': 'Class 2',
          'index': 2,
          'name': 'Class 2',
          'status': 'Live'
        },
        {
          'category': 'class',
          'code': 'class3',
          'description': 'Class 3',
          'identifier': 'Class 3',
          'index': 3,
          'name': 'Class 3',
          'status': 'Live'
        }
      ],
      'required': false,
      'visible': true
    }
  ],
  'templateName': 'onBoardingForm'
};

const userDetails =  {
  'programId': '453b79e0-2d2f-11ea-a48e-338d4518b681',
  'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
  'onBoarded': true,
  'onBoardingData': {
    'school': 'My School'
  },
  'roles': [
    'CONTRIBUTOR'
  ]
};

// without user details
export const programDetailsWithOutUserDetails = {
  'config': {
    'framework': 'NCFCOPY',
    'roles': [
      {
        'role': 'CONTRIBUTOR'
      },
      {
        'role': 'REVIEWER'
      }
    ],
    'header': {
      'id': 'ng.sunbird.header',
      'ver': '1.0',
      'compId': 'headerComp',
      'author': 'Venkat',
      'description': '',
      'publishedDate': '',
      'data': {},
      'config': {
        'tabs': [
          {
            'index': 1,
            'label': 'Contribute',
            'onClick': 'collectionComponent'
          },
          {
            'index': 2,
            'label': 'Review',
            'onClick': 'collectionComponent'
          },
          {
            'index': 3,
            'label': 'Dashboard',
            'onClick': 'dashboardComponent'
          }
        ]
      }
    },
    'sharedContext': [
      'channel',
      'framework',
      'board',
      'medium',
      'gradeLevel',
      'subject'
    ],
    'onBoardingForm': {...onBoardingForm},
  },
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'description': 'hello program',
  'endDate': null,
  'name': 'CBSE',
  'programId': '6835f250-1fe1-11ea-93ea-2dffbaedca40',
  'slug': 'sunbird',
  'startDate': '2019-02-03T07:20:30.000Z',
  'status': null,
  'type': 'private'
};

export const programDetailsWithOutUserAndForm = {
  'config': {
    'framework': 'NCFCOPY',
    'roles': [
      {
        'id': 1,
        'name': 'CONTRIBUTOR',
        'default': true,
        'defaultTab': 1,
        'tabs': [
          1,
          2
        ]
      },
      {
        'id': 2,
        'name': 'REVIEWER',
        'defaultTab': 2,
        'tabs': [
          2
        ]
      }
    ],
    'header': {
      'id': 'ng.sunbird.header',
      'ver': '1.0',
      'compId': 'headerComp',
      'author': 'Venkat',
      'description': '',
      'publishedDate': '',
      'data': {},
      'config': {
        'tabs': [
          {
            'index': 1,
            'label': 'Contribute',
            'onClick': 'collectionComponent'
          },
          {
            'index': 2,
            'label': 'Review',
            'onClick': 'collectionComponent'
          },
          {
            'index': 3,
            'label': 'Dashboard',
            'onClick': 'dashboardComponent'
          }
        ]
      }
    },
    'sharedContext': [
      'channel',
      'framework',
      'board',
      'medium',
      'gradeLevel',
      'subject'
    ]
  },
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'description': 'hello program',
  'endDate': null,
  'name': 'CBSE',
  'programId': '6835f250-1fe1-11ea-93ea-2dffbaedca40',
  'slug': 'sunbird',
  'startDate': '2019-02-03T07:20:30.000Z',
  'status': null,
  'type': 'private'
};

export const programDetailsWithUserDetails = {
  'programId': '453b79e0-2d2f-11ea-a48e-338d4518b681',
  'config': {...programDetailsWithOutUserAndForm.config},
  'defaultRoles': [
    'CONTRIBUTOR'
  ],
  'userDetails': {...userDetails}
};



export const extFrameWorkPostData = {
  'id': 'api.add.participants',
  'responseCode': 'OK',
  'result': {
    'created': 'OK',
    'programId': '852203a0-329b-11ea-896e-e55dcdd2e76a'
  },
  'ts': '2020-01-09T04:50:45.171Z',
  'ver': '1.0'
};


export const userProfile = {
  'tcStatus': null,
  'maskedPhone': '******4412',
  'rootOrgName': 'Sunbird',
  'subject': [
    'Mathematics'
  ],
  'channel': null,
  'language': [
    'English'
  ],
  'identifier': '874ed8a5-782e-4f6c-8f36-e0288455901e',
  'externalIds': [],
  'registryId': null,
  'rootOrgId': 'ORG_001',
  'prevUsedEmail': '',
  'firstName': 'Creation',
  'dob': '2018-02-13',
  'grade': [
    'Grade 2'
  ],
  'currentLoginTime': null,
  'roles': [
    'public'
  ],
  'userName': 'ntptest102',
  'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
  'framework': {
    'gradeLevel': [
      'KG'
    ],
    'subject': [
      'English'
    ],
    'id': [
      'NCF'
    ],
    'medium': [
      'English'
    ],
    'board': [
      'State (Uttar Pradesh)'
    ]
  },
  'rootOrgAdmin': false,
  'userRoles': [
    'PUBLIC',
    'BOOK_CREATOR',
    'CONTENT_CREATOR',
    'COURSE_MENTOR',
    'ANNOUNCEMENT_SENDER'
  ],
  'organisationIds': [
    'ORG_001'
  ],
  'hashTagIds': [
    'b00bc992ef25f1a9a8d63291e20efc8d'
  ]
};

export const userDetail = 
  {
    "id": "api.user.search",
    "ver": "v1",
    "ts": "2020-08-31 08:04:59:441+0000",
    "params": {
        "resmsgid": null,
        "msgid": "f194a58c-7103-9101-9683-1d63f346db7d",
        "err": null,
        "status": "success",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "response": {
            "count": 2,
            "content": [
                {
                    "lastName": null,
                    "tcStatus": null,
                    "maskedPhone": null,
                    "rootOrgName": "Christ_University",
                    "roles": [
                        "PUBLIC"
                    ],
                    "channel": "CH123",
                    "updatedDate": null,
                    "prevUsedPhone": "",
                    "stateValidated": true,
                    "isDeleted": false,
                    "organisations": [
                        {
                            "updatedBy": null,
                            "organisationId": "01307938306521497658",
                            "orgName": "Christ_University",
                            "addedByName": null,
                            "addedBy": null,
                            "roles": [
                                "CONTENT_REVIEWER",
                                "BOOK_REVIEWER",
                                "PUBLIC"
                            ],
                            "approvedBy": null,
                            "updatedDate": null,
                            "userId": "9ef979da-7705-4550-98f1-779ef90e79a8",
                            "approvaldate": null,
                            "isDeleted": false,
                            "parentOrgId": null,
                            "hashTagId": "01307938306521497658",
                            "isRejected": null,
                            "position": null,
                            "id": "013079427143655424228",
                            "orgjoindate": "2020-08-05 06:34:51:622+0000",
                            "isApproved": null,
                            "orgLeftDate": null
                        }
                    ],
                    "managedBy": null,
                    "provider": null,
                    "flagsValue": 6,
                    "maskedEmail": "jn***@yopamil.com",
                    "id": "9ef979da-7705-4550-98f1-779ef90e79a8",
                    "tempPassword": null,
                    "recoveryEmail": "",
                    "email": "jn***@yopamil.com",
                    "projectselectedRole": "CONTRIBUTOR",
                    "identifier": "9ef979da-7705-4550-98f1-779ef90e79a8",
                    "thumbnail": null,
                    "updatedBy": null,
                    "accesscode": null,
                    "profileSummary": null,
                    "phoneVerified": false,
                    "tcUpdatedDate": null,
                    "locationIds": [],
                    "registryId": null,
                    "recoveryPhone": "",
                    "userName": "jnc68@yopamil.com",
                    "rootOrgId": "01307938306521497658",
                    "prevUsedEmail": "",
                    "firstName": "jnc68",
                    "lastLoginTime": null,
                    "emailVerified": true,
                    "tncAcceptedOn": null,
                    "framework": {},
                    "createdDate": "2020-08-05 06:34:50:037+0000",
                    "phone": "",
                    "createdBy": "bb193071-02fb-41f0-9b8c-1b03ecdaf729",
                    "currentLoginTime": null,
                    "userType": "OTHER",
                    "tncAcceptedVersion": null,
                    "status": 1
                },
                {
                    "lastName": null,
                    "tcStatus": null,
                    "maskedPhone": null,
                    "rootOrgName": "Christ_University",
                    "roles": [
                        "PUBLIC"
                    ],
                    "channel": "CH123",
                    "updatedDate": null,
                    "prevUsedPhone": "",
                    "stateValidated": true,
                    "isDeleted": false,
                    "organisations": [
                        {
                            "updatedBy": null,
                            "organisationId": "01307938306521497658",
                            "orgName": "Christ_University",
                            "addedByName": null,
                            "addedBy": null,
                            "roles": [
                                "CONTENT_CREATOR",
                                "BOOK_CREATOR",
                                "PUBLIC"
                            ],
                            "approvedBy": null,
                            "updatedDate": null,
                            "userId": "77f36572-b372-4630-9b82-a56f35d9b61a",
                            "approvaldate": null,
                            "isDeleted": false,
                            "parentOrgId": null,
                            "hashTagId": "01307938306521497658",
                            "isRejected": null,
                            "position": null,
                            "id": "013079421882687488184",
                            "orgjoindate": "2020-08-05 06:22:18:256+0000",
                            "isApproved": null,
                            "orgLeftDate": null
                        }
                    ],
                    "managedBy": null,
                    "provider": null,
                    "flagsValue": 6,
                    "maskedEmail": "jn***@yopamil.com",
                    "id": "77f36572-b372-4630-9b82-a56f35d9b61a",
                    "tempPassword": null,
                    "recoveryEmail": "",
                    "email": "jn***@yopamil.com",
                    "identifier": "77f36572-b372-4630-9b82-a56f35d9b61a",
                    "thumbnail": null,
                    "updatedBy": null,
                    "accesscode": null,
                    "profileSummary": null,
                    "phoneVerified": false,
                    "tcUpdatedDate": null,
                    "locationIds": [],
                    "registryId": null,
                    "recoveryPhone": "",
                    "userName": "jnc24@yopamil.com",
                    "rootOrgId": "01307938306521497658",
                    "prevUsedEmail": "",
                    "firstName": "jnc24",
                    "lastLoginTime": null,
                    "emailVerified": true,
                    "tncAcceptedOn": null,
                    "framework": {},
                    "createdDate": "2020-08-05 06:22:16:427+0000",
                    "phone": "",
                    "createdBy": "bb193071-02fb-41f0-9b8c-1b03ecdaf729",
                    "currentLoginTime": null,
                    "userType": "OTHER",
                    "tncAcceptedVersion": null,
                    "status": 1
                }
            ]
        }
    }
}

export const chunkedUserList  = [
 [ {
      "lastName": null,
      "tcStatus": null,
      "maskedPhone": null,
      "rootOrgName": "Christ_University",
      "roles": [
          "PUBLIC"
      ],
      "channel": "CH123",
      "updatedDate": null,
      "prevUsedPhone": "",
      "stateValidated": true,
      "isDeleted": false,
      "organisations": [
          {
              "updatedBy": null,
              "organisationId": "01307938306521497658",
              "orgName": "Christ_University",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "CONTENT_REVIEWER",
                  "BOOK_REVIEWER",
                  "PUBLIC"
              ],
              "approvedBy": null,
              "updatedDate": null,
              "userId": "9ef979da-7705-4550-98f1-779ef90e79a8",
              "approvaldate": null,
              "isDeleted": false,
              "parentOrgId": null,
              "hashTagId": "01307938306521497658",
              "isRejected": null,
              "position": null,
              "id": "013079427143655424228",
              "orgjoindate": "2020-08-05 06:34:51:622+0000",
              "isApproved": null,
              "orgLeftDate": null
          }
      ],
      "managedBy": null,
      "provider": null,
      "flagsValue": 6,
      "maskedEmail": "jn***@yopamil.com",
      "id": "9ef979da-7705-4550-98f1-779ef90e79a8",
      "tempPassword": null,
      "recoveryEmail": "",
      "email": "jn***@yopamil.com",
      "projectselectedRole": "CONTRIBUTOR",
      "identifier": "9ef979da-7705-4550-98f1-779ef90e79a8",
      "thumbnail": null,
      "updatedBy": null,
      "accesscode": null,
      "profileSummary": null,
      "phoneVerified": false,
      "tcUpdatedDate": null,
      "locationIds": [],
      "registryId": null,
      "recoveryPhone": "",
      "userName": "jnc68@yopamil.com",
      "rootOrgId": "01307938306521497658",
      "prevUsedEmail": "",
      "firstName": "jnc68",
      "lastLoginTime": null,
      "emailVerified": true,
      "tncAcceptedOn": null,
      "framework": {},
      "createdDate": "2020-08-05 06:34:50:037+0000",
      "phone": "",
      "createdBy": "bb193071-02fb-41f0-9b8c-1b03ecdaf729",
      "currentLoginTime": null,
      "userType": "OTHER",
      "tncAcceptedVersion": null,
      "status": 1
  }],
  [
  {
      "lastName": null,
      "tcStatus": null,
      "maskedPhone": null,
      "rootOrgName": "Christ_University",
      "roles": [
          "PUBLIC"
      ],
      "channel": "CH123",
      "updatedDate": null,
      "prevUsedPhone": "",
      "stateValidated": true,
      "isDeleted": false,
      "organisations": [
          {
              "updatedBy": null,
              "organisationId": "01307938306521497658",
              "orgName": "Christ_University",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "CONTENT_CREATOR",
                  "BOOK_CREATOR",
                  "PUBLIC"
              ],
              "approvedBy": null,
              "updatedDate": null,
              "userId": "77f36572-b372-4630-9b82-a56f35d9b61a",
              "approvaldate": null,
              "isDeleted": false,
              "parentOrgId": null,
              "hashTagId": "01307938306521497658",
              "isRejected": null,
              "position": null,
              "id": "013079421882687488184",
              "orgjoindate": "2020-08-05 06:22:18:256+0000",
              "isApproved": null,
              "orgLeftDate": null
          }
      ],
      "managedBy": null,
      "provider": null,
      "flagsValue": 6,
      "maskedEmail": "jn***@yopamil.com",
      "id": "77f36572-b372-4630-9b82-a56f35d9b61a",
      "tempPassword": null,
      "recoveryEmail": "",
      "email": "jn***@yopamil.com",
      "identifier": "77f36572-b372-4630-9b82-a56f35d9b61a",
      "thumbnail": null,
      "updatedBy": null,
      "accesscode": null,
      "profileSummary": null,
      "phoneVerified": false,
      "tcUpdatedDate": null,
      "locationIds": [],
      "registryId": null,
      "recoveryPhone": "",
      "userName": "jnc24@yopamil.com",
      "rootOrgId": "01307938306521497658",
      "prevUsedEmail": "",
      "firstName": "jnc24",
      "lastLoginTime": null,
      "emailVerified": true,
      "tncAcceptedOn": null,
      "framework": {},
      "createdDate": "2020-08-05 06:22:16:427+0000",
      "phone": "",
      "createdBy": "bb193071-02fb-41f0-9b8c-1b03ecdaf729",
      "currentLoginTime": null,
      "userType": "OTHER",
      "tncAcceptedVersion": null,
      "status": 1
  }
]
]