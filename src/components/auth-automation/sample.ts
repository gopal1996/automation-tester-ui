export const SAMPLE_TEXT: string = `
class input_file_load:
    pass

class URLPath:

    # PROCESS
    # PROCESS_CREATION = "/flow/2/{account_id}/process"

    # These is the area for giving the URL for API under Test
    # Example : if Process_draft API is the new API which is developed and under Test

    url_dic={

          "PROCESS_DRAFT" : "/process/2/account_id/process_name",
          "Process_Submit": "/process/2/account_id/process_name/Pk6jjSKT71lN/12345/submit"
            }



class store_values:

    # class for storing the userdeatils, accountdeatils , accesskey list

    userdetails={

    "FirstName" : "Asha",
    "LastName" : "keerthi",
    "Email"   :  "asha@kissflow.com",
    "user_id" :"Us4X_5f1IHAM",    # please do inspect and do any action and take the User_id
    "userrole" : "User"

    }

    Account_details={

        "APP_ENVIRONMENT": "kfdw-06.pnrqa.zingworks.com",
        'subdomain' : "pnrqa",
        "account_id":"Ac4TOLSl80e7",
        "same_id": "Ac4TOLSl80e7",
        "different_id": "Ac4TOLSl80e7_1",
        "user_name": "asha",
        "user_id": "Us4X_5f1IHAM",

        "headers": {
            "X-Access-Key-Id": "Ak5377b4a7-775e-4e46-b12f-13fc97dfc417",
            "X-Access-Key-Secret": "DY-T7pOHmYs1WhNjlJobcMQES3n8NNSvj9fptSK6wjZQ27eLlYpThNWUDATU75gZ37W34cvyBynCTosSddBdQ"
                    },

        "Admin_headers": {
            "X-Access-Key-Id": "Ak70de745e-8cb6-4914-88f8-7375a8e6e80f",
            "X-Access-Key-Secret": "Fq280xjAnhyuvSZRRnfLdqFDBni0D9vFlcK09ShEiApcoK2tD1tkuaMqa2xD2ViIwuzoVn9tJnDGZHjoWCSBg"
        },
    }

    Access_key_list = {

        "Admin_headers": {
            "X-Access-Key-Id": "Ak70de745e-8cb6-4914-88f8-7375a8e6e80f",
            "X-Access-Key-Secret": "Fq280xjAnhyuvSZRRnfLdqFDBni0D9vFlcK09ShEiApcoK2tD1tkuaMqa2xD2ViIwuzoVn9tJnDGZHjoWCSBg"
      },

        "Not_Expired": {
            "X-Access-Key-Id": "Ak5377b4a7-775e-4e46-b12f-13fc97dfc417",
            "X-Access-Key-Secret": "DY-T7pOHmYs1WhNjlJobcMQES3n8NNSvj9fptSK6wjZQ27eLlYpThNWUDATU75gZ37W34cvyBynCTosSddBdQ"
        },

        "Expired": {
            "X-Access-Key-Id": "Ak18447044-2695-425a-b56e-c40c0da093e7",
            "X-Access-Key-Secret": "s-AWCf7h6n37boML7rRmoqvVlb9VDhpRfUkXGKkwTKs0GWTIVeKcNEKZY8VRUV6aR38AYZTbHMIZJ9gzOhjg"
        },
        "Deleted": {
            "X-Access-Key-Id": "Ak954e8a1b-452c-4765-bbc2-8c624562bc4e",
            "X-Access-Key-Secret": "tgNuMK2mKLpv6426LXjCx0Vpmjzr2sFGNt1swBhkQ674yQBmveOXnbq1JyX-lMFdZLWEWE3k5pCYIqRZ7fR1xg"
        },

        "access_key_for_status_ON_and_off": {
            "X-Access-Key-Id": "Ak1af4abf3-2663-4ce9-91a8-e2d0e9826f78",
            "X-Access-Key-Secret": "iquAnwwOMZOZ2BKz5v9mLJU0h9H3pgTPiXrmqsMQswDjETe8KyNVt4EiOkdU72QT8kG4gcFZe-BdQt2LYKg"
        },

    }

    # The URL which is going to be used for preparing the test environment

    get_url = {

                "Deactivate_a_user": "/user/2/account_id/bulk/deactivate",
                "activate_a_user": "/user/2/account_id/bulk/activate",
                "delete_a_user": "/user/2/account_id/bulk/delete",
                "add_a_user": "/user/2/account_id?skip_email=false",
                "join_by_user": "/user/2/account_id/join",
                "change_user_type" : "/user/2/account_id/batch",
                "change_user_type_user":"/user/2/account_id/batch",
                "change_user_type_super_admin":"/user/2/account_id/batch",
                "change_user_type_billing_admin":"/user/2/account_id/batch",
                "change_user_type_user_admin":"/user/2/account_id/batch",
                 "Update_a_user_role" : "/user/2/account_id/batch",
                 "access_key_status_off" : "/user/2/account_id/api/access_key"

                }

    # The Payload for the corresponding above mentioned URL

    get_payload ={

                   "Deactivate_a_user" : {'json': {"Filter": {"AND": [{"OR": [{"LHSField": "_id", "Operator": "IN", "RHSType": "Value", "RHSValue": ["user_id"]}]}]}},
                                          'replacekey':{'user_id':userdetails['user_id']}},

                   "activate_a_user" : {'json': {"Filter": {"AND": [{"OR": [{"LHSField": "_id", "Operator": "IN", "RHSType": "Value", "RHSValue": ["user_id"]}]}]}},
                                        'replacekey':{'user_id':userdetails['user_id']}},

                   "delete_a_user" : {'json': {"Filter": {"AND": [{"OR": [{"LHSField": "_id", "Operator": "IN", "RHSType": "Value", "RHSValue": ["user_id"]}]}]}},
                                      'replacekey':{'user_id':userdetails['user_id']}},

                   "add_a_user" : {'json':{'FirstName': 'FirstName', 'Email': 'Email'},
                                   'replacekey':{'FirstName':userdetails['FirstName'],'Email':userdetails['Email']}},

                   "join_by_user" : {'json':{'FirstName': 'FirstName', 'Email': 'Email'},
                                     'replacekey':{'FirstName':userdetails['FirstName'],'Email':userdetails['Email']}},

                   "change_user_type" : {'json':[{"UserType": "UserType","_id": "_id"}],
                                       'replacekey':{'UserType':"User",'_id':userdetails['user_id']}},

                   "change_user_type_user":{'json':[{"UserType": "UserType","_id": "_id"}],
                                       'replacekey':{'UserType':'User','_id':userdetails['user_id']}},

                  "change_user_type_super_admin": {'json': [{"UserType": "UserType", "_id": "_id"}],
                                  'replacekey': {'UserType': 'Super Admin', '_id': userdetails['user_id']}},

                  "change_user_type_billing_admin": {'json': [{"UserType": "UserType", "_id": "_id"}],
                                       'replacekey': {'UserType': 'Billing Admin', '_id': userdetails['user_id']}},

                  "change_user_type_user_admin": {'json': [{"UserType": "UserType", "_id": "_id"}],
                                           'replacekey': {'UserType': 'User Admin', '_id': userdetails['user_id']}}
                   }


    # The Request Type for the corresponding above mentioned URL

    get_url_type={

        "Update_a_user_role": "Post",
        "Deactivate_a_user": "Post",
        "activate_a_user": "Post",
        "delete_a_user": "Post",
        "add_a_user": "Post",
        "join_by_user":"Post",
        "change_user_type":"Post",
        "change_user_type_user": "Post",
        "change_user_type_super_admin": "Post",
        "change_user_type_billing_admin": "Post",
        "change_user_type_user_admin": "Post",
        "change_access_key_ON":"Put",
        "change_access_key_OFF":"Put",

        "PROCESS_DRAFT": "Post",
        "Process_Submit": "Post",

     }


    # Mapping here for the corresponding input value to the corresponding query url,type,payload


    dic_for_mapping = {
                          "Active": "activate_a_user",
                          "InActive": "Deactivate_a_user",
                          "Deleted": "delete_a_user",
                          "Email_Verification_bending": "add_a_user",
                          "Join_req": "join_by_user",
                          "change_user_type": "change_user_type",
                          "add_a_user": "add_a_user",
                          "User": "change_user_type_user",
                          "Billing Admin":"change_user_type_billing_admin",
                          "Super Admin":"change_user_type_super_admin",
                          "User Admin":"change_user_type_user_admin",
                          "Access_ON" : "change_access_key_ON",
                          "Access_OFF": "change_access_key_OFF",


                      }

    # The strings which need to be Replaced in the URL which were under Test

    Replace_url_para = {'processname':"process_task_delegation"}


  # input class where you input were stored

class inputclass:

    # This is the input area where you modify the combination , these list can be extensible
    # you just need to enter the new item and should accordingly give the elements in DIC_mapping, corresponding url ,
    # corresponding payload , type ,

    account_id_list= ["same_id"]
    roles_account_list= ["User"]
    userstate_list= [ "InActive"]
    access_key_state_list= ["Not_Expired"]
    status_of_access_key_list= ["ON","OFF"]


    # the list which contains the URL under Test , can modify the URL under test by modifying here

    url_list=["PROCESS_DRAFT"]


    # Pre_requitse area where the actions needed to perform before some particular actions
    # for example : For the user should be inactive , the user should be first a user and
    # for email_verifucation : the user should be modified as user and after that it should be deleted

    Pre_requiste = {

        "Active": [],
        "InActive": ["change_user_type"],
        "Deleted": ["change_user_type"],
        "Email_Verification_bending": ["change_user_type", "Deleted"],
        "Join_req": ["change_user_type", "Deleted"]

    }

    # The input list

    account_id_list_1= [
        "same_id",
        "different_id"
    ]

    roles_account_list_1= [
        "Billing Admin",
        "Super Admin",
        "User Admin",
        "User"
    ]

    userstate_list_1 = [
        "Active",
        "InActive",
        "Deleted",
        "Email_Verification_bending",
        "Join_req"
    ]

    roles_process_list_1= [
        "Admin",
        "Report_Admin",
        "Data_Admin",
        "Developer",
        "Member",
        "Not_a_Member",
        "Assignee"
    ]

    access_key_state_list_1= [
        "Not_Expired",
        "Expired",
        "Deleted"
    ]

    status_of_access_key_list_1= [
        "Access_ON",
        "Access_OFF"
    ]

# The Error messages dic , the error which needed to compare with the result

class ErrorMessages:
    errormessagedic ={
        'unauthorized_error_401':{
            "type": "UnauthorizedException",
            "error_code": "KISSFLOW_ERROR_00014",
            "en_message": "You are not authorized to access this resource.",
            "message": "You are not authorized to access this resource.",
            'args': {},
            'status': 'error',
        },

        'Inactive_user_error_403':{

                "type": "InactiveUserError",
                "error_code": "KISSFLOW_ERROR_00028",
                "en_message": "This user is not active.",
                "message": "This user is not active.",
                "args": {
                    "UserId": "Us4GoIZF_jcb"
                },
                "status": "error",
        },


        'user_does_not_exist_404':{
                "type": "UserDoesNotExistError",
                "error_code": "KISSFLOW_ERROR_00015",
                "en_message": "This user does not exist in your account.",
                "message": "This user does not exist in your account.",
                "args": {
                    "user": {
                        "_id": "Us4GoIZF_jcb",
                        "Kind": "User",
                        "Joining_Date": "false",
                        "Boolean_Field": "true",
                        "FirstName": "Keerthi",
                        "Email": "keerthipalani5297@gmail.com",
                        "Name": "Keerthi",
                        "UserType": "None",
                        "UserSystemType": "None",
                        "Status": "Deleted",
                        "_created_at": {
                            "v": "Mon, 14 Feb 2022 12:07:35 GMT",
                            "td": "",
                            "tz": "GMT",
                            "dv": "2022-02-14T12:07:35Z"
                        },
                        "_created_by": {
                            "_id": "Us4GoIZF_jcb",
                            "Name": "Asha",
                            "Kind": "User"
                        },
                        "_flow_name": "Employee",
                        "_modified_at": {
                            "v": "Mon, 13 Feb 2023 11:14:36 GMT",
                            "td": "",
                            "tz": "GMT",
                            "dv": "2023-02-13T11:14:36Z"
                        },
                        "_modified_by": {
                            "_id": "flobot",
                            "Name": "Flobot",
                            "Kind": "User"
                        },
                        "Groups": [
                            {
                                "_id": "Us4V7hFPrj1V",
                                "src": [
                                    "Us4V7hFPrj1V"
                                ]
                            }
                        ],
                        "EmailVerified": "false",
                        "NoOfFailedAttempts": 0,
                        "Password": "None",
                        "PasswordUpdatedAt": {
                            "v": "Sun, 20 Nov 2022 06:58:42 GMT",
                            "td": "",
                            "tz": "GMT",
                            "dv": "2022-11-20T06:58:42Z"
                        },
                        "LastLoggedInAt": {
                            "v": "Mon, 13 Feb 2023 07:05:07 GMT",
                            "td": "",
                            "tz": "GMT",
                            "dv": "2023-02-13T07:05:07Z"
                        },
                        "_model_id": "User",
                        "_doc_version": "103232387665867073",
                        "_last_access": {
                            "AccessedAt": "Mon, 13 Feb 2023 11:09:26 GMT",
                            "Device": {
                                "IP": "14.97.120.194",
                                "Browser": "Chrome",
                                "Platform": "Mac Os",
                                "BrowserVersion": "109.0.0.0",
                                "UserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
                                "DeviceName": "Mac",
                                "OsVersion": "10_15_7",
                                "DeviceType": "Computer",
                                "DeviceHost": "None",
                                "Language": "en-GB,en-US;q=0.9,en;q=0.8"
                            },
                            "Locale": "en-gb"
                        },
                        "_programmatic_access": {
                            "AccessedAt": "Mon, 13 Feb 2023 11:10:18 GMT",
                            "Device": {
                                "IP": "14.97.120.194",
                                "Browser": "None",
                                "Platform": "None",
                                "BrowserVersion": "None",
                                "UserAgent": "PostmanRuntime/7.30.0",
                                "DeviceName": "None",
                                "OsVersion": "None",
                                "DeviceType": "None",
                                "DeviceHost": "None",
                                "Language": "None"
                            },
                            "Locale": "none"
                        },
                        "PhoneVerified": "false",
                        "_is_deleted": "true",
                        "TFAEnrollment": "None",
                        "TFAStatus": {
                            "IsEnabled": "false"
                        },
                        "LoginAttemptAt": {
                            "v": "Wed, 04 Jan 2023 13:38:26 GMT",
                            "td": "",
                            "tz": "GMT",
                            "dv": "2023-01-04T13:38:26Z"
                        }
                    }
                },
                "status": "error",


        },

        "account_id_not_found_404":{

                "type": "AccountDoesNotExist",
                "error_code": "KISSFLOW_ERROR_00026",
                "en_message": "This account does not exist.",
                "message": "This account does not exist.",
                "args": {},
                "status": "error",


        },

        'Invalid_Access_403':{
            "type": "PageIdleTimeOut",
            "error_code": "KISSFLOW_ERROR_00031",
            "en_message": "Invalid access. Please refresh and try again.",
            "message": "Invalid access. Please refresh and try again.",
            "args": {},
            "status": "error",
        },

        'submit_lock_exception':{

                "type": "SubmitLockException",
                "error_code": "KISSFLOW_ERROR_050303",
                "en_message": "Another user has already submitted this item.",
                "message": "Another user has already submitted this item.",
                "args": {},
                "status": "error",

        },

        'validation_item_expired_exception':{
                "type": "ValidationExceptions",
                "error_code": "KISSFLOW_ERROR_050302",
                "en_message": "You don't have permission to submit this item anymore.",
                "message": "You don't have permission to submit this item anymore.",
                "args": {
                    "item_name": "{process_name} from {user_name}",
                    "process_name": "{process_name}"
                },
                "status": "error",
        },

        'document_not_found':{

                "type": "DocumentNotFound",
                "error_code": "KISSFLOW_ERROR_01015",
                "en_message": "Cannot find the item Pk5Jwv_ypZfL77 for the flow check_process.",
                "message": "Cannot find the item {instance_id} for the flow {model_name}.",
                "_id": "81daa25b-2c84-452f-8e48-28b65d8408a0",
                "args": {
                    "instance_id": "{instance_id}",
                    "model_name": "{process_name}"
                },
                "status": "error",
                "request_id": "process.submit-item-aa60fef6-9f9e-4578-8523-f05c988ab0fa"

        }


    }
`;
