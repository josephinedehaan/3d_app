<?php
// Create the controller class for the MVC design pattern
class Controller {

    // Declare public variables for the controller class
    public $load;
    public $model;

    // Create functions for the controller class
    function __construct($pageURI = null) // Constructor of the class
    {
        // Create new bjects for Load and Model
        $this->load = new Load();
        $this->model = new Model();
        // Determine what page you are on
        $this->$pageURI();
    }
    // Home page fuction
    function home()
    {
        // Get data from the defined model method - model3D_info()
        $data = $this->model->model3D_info();
        // Tell the loader what view to load and which data to use
        $this->load->view('view3DAppTest_2', $data);
    }

    function apiCreateTable()
    {
        $data = $this->model->dbCreateTable();  
        $this->load->view('view3DAppData', $data);
    }
    function apiInsertData()
    {
        $data = $this->model->dbInsertData();
        $this->load->view('view3DAppData', $data);
    }
    function apiGetData() 
    {
        $data = $this->model->dbGetData();
        $this->load->view('view3DAppData', $data);
    }


    function dbCreateTable()
    {
        echo "Create table function";
    }
    function dbInsertData()
    {
        echo "Data insertion function";
    }
    function dbGetData() {
        echo "Data retrieval function";
    }
}
?>
