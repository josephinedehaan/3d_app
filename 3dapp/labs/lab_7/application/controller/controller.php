<?php
// Create the controller class for the MVC design pattern
class Controller {

    // Declare public variables for the controller class
    public $load;
    public $model;

    // Create functions for the controller class
    function __construct() // Constructor of the class
    {
        // Create new bjects for Load and Model
        $this->load = new Load();
        $this->model = new Model();
        // Determine what page you are on
        $this->home();
    }
    // Home page fuction
    function home()
    {
        // Get data from the defined model method - model3D_info()
        $data = $this->model->model3D_info();
        // Tell the loader what view to load and which data to use
        $this->load->view('view3DAppTest_2', $data);
    }
}
?>
