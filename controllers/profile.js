const Profile = require("../models/Profile");
const { check, validationResult } = require("express-validator");

exports.getProfile = async (req, res) => {
  try {
    //populate() will get name and avatar from the user model
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(Profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createUpdateProfile =
  ("/",
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const {
      company,
      location,
      bio,
      employment,
      student,
      graduate,
      interests,
      status,
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (employment) profileFields.employment = employment;
    if (student) profileFields.student = student;
    if (graduate) profileFields.graduate = graduate;
    if (status) profileFields.status = status;

    const interestsFields = interests;
    console.log(interestsFields, "interests");
    // normalize interests fields to ensure valid url
    for (const [key, value] of Object.entries(interestsFields)) {
      if (value && value.length > 0)
        interestsFields[key] = normalize(value, { forceHttps: true });
    }
    // add to profileFields
    profileFields.interests = interestsFields;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          {
            $set: profileFields,
          },
          { new: true }
        );
      }
      //Create
      else {
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    res.send(profileFields);
  });
