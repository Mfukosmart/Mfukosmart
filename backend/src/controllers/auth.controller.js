exports.register = async (req, res) => {

    res.status(201).json({

        success: true,

        message: "User registered successfully",

        user: req.body

    });

};

exports.login = async (req, res) => {

    res.status(200).json({

        success: true,

        message: "Login successful"

    });

};

exports.profile = async (req, res) => {

    res.status(200).json({

        success: true,

        message: "User profile",

        user: {

            id: 1,

            name: "Brian",

            email: "brian@example.com"

        }

    });

};