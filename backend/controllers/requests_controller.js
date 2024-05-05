import Requests from "../modules/requests_module.js";


export const addRequest = async (req, res) => {
    try {
        const request = await Requests.create(req.body);
        return res.status(200).json(request);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const request = async (req, res) => {
    try {
        const request = await Requests.findById(req.params.id);
        if (!request) {
            return res.status(200).json({ success: false, error: "Requests not found" });
        }
        res.status(200).json(request)
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const requests = async (req, res) => {
    try {
        const requests = await Requests.find({ userRef: req.params.id });
        return res.status(200).json(requests);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const updateRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const request = await Requests.findById(id);
        if (!request) {
            return res.status(404).json({ success: false, error: "Request not found" });
        }

        request.status = status;
        await request.save();

        return res.status(200).json({ success: true, message: "Request status updated successfully", request });
    } catch (error) {
        console.error("Error updating request status:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};