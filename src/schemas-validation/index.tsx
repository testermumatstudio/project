import * as yup from "yup";

const usernameMatch = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
// const urlRule = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
// const email = /([A-Za-z0-9!#-'*+\-/=?^_`{-~\xA0-\x{10FFFF}]+(?:\.[A-Za-z0-9!#-'*+\-/=?^_`{-~\xA0-\x{10FFFF}])|(?:[ !#-\[\]-~\xA0-\x{10FFFF}]|\\[ -~])*)@((?:[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?|[\x00-\x{10FFFF}]*[\x80-\x{10FFFF}]+[\x00-\x{10FFFF}]*)(?:\.(?:[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?|[\x00-\x{10FFFF}]*[\x80-\x{10FFFF}]+[\x00-\x{10FFFF}]*))*)/

export const LoginScheme = yup.object().shape({

    username: yup
    .string()
    .required('Please Enter your User Name')
    .min(5, "User Name must be at least 5 characters long")
    .required("Required, Please Enter your User Name"),

    password: yup
    .string()
    .required('Required, Please Enter your password')
    .matches(
        passwordRules,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

});

export const CreateUserScheme = yup.object().shape({

    fullname: yup
    .string()
    .required('Please Enter your Full Name')
    .min(5, "User Name must be at least 5 characters long")
    .required("Required, Please Enter your Full Name"),

    username: yup
    .string()
    .required('Please Enter your User Name')
    .min(5, "User Name must be at least 5 characters long")
    .required("Required, Please Enter your User Name "),

    email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),

    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
        passwordRules,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

    repeatPassword: yup
    .string()
    .required('Repeat Password is required')
    .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup
        .string()
        .oneOf([yup.ref("password")],
          "Both password need to be the same"
        )
      })

});

export const ForgotScheme = yup.object().shape({

    username: yup
    .string()
    .required('Please Enter your password')
    .min(5, "UserName must be at least 5 characters long")
    .required("Required"),

    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
        usernameMatch,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

});

export const createNftScheme = yup.object().shape({

    theFile: yup.mixed()
    .nullable()
    .notRequired()
    .required("Required"),

    nameNftField: yup
    .string()
    .min(7, "Name must be at least 7 characters long")
    .required("Required"),

    descriptionNft:yup
    .string()
    .min(10, "Description must be at least 1 characters long")   
    .required("Required"),

    energy: yup
    .string()
    .min(1, "Energy must be at least 1 characters long"),
    // .required("Required"),

    strength:yup
    .string()
    .min(1, "Strength must be at least 1 characters long"),
    // .required("Required"),

    impact: yup
    .string()
    .min(1, "Impact must be at least 1 characters long"),
    // .required("Required"),

    sustainability:yup
    .string()
    .min(1, "Sustainability must be at least 1 characters long"),
    // .required("Required"),

    rarity: yup
    .string()
    .min(1, "Rarity must be at least 1 characters long"),
    // .required("Required"),

    royalties :yup
    .string()
    .min(1, "Royalties must be at least 1 characters long"),
    // .required("Required"),
  
});

export const EditProfileSchema = yup.object().shape({
    
    fullname: yup
    .string()
    .min(5, "User Name must be at least 5 characters long"),

    username: yup
    .string()
    .min(5, "User Name must be at least 5 characters long"),

    email: yup
    .string()
    .email('Must be a valid email')
    .max(255),

    userAvatar: yup
    .string(),

    userBanner: yup
    .string(),
    
    biography: yup
    .string()
    .min(7, "Title must be at least 7 characters long")

});