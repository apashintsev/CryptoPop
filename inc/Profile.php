<?php
defined('_INCCHECK') or die('');


class Profile
{

    /**
     * @var string
     */
    private $groupTable;
    public $db;

    function __construct() {
        //TODO: move to config
        $servername = "localhost";
        $dbname = "cpop";
        $username = "cpop_usr";
        $password = "$2A5qfz75";
        $this->groupTable = 'groups';
        $this->db = $this->connect($servername, $dbname, $username, $password);
    }


    private function connect($servername, $dbname, $username, $password){
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            return null;
        }
    }



    public function getGroups() {
        $groups = [];
        $stmt = $this->db->prepare("SELECT id, addresses FROM $this->groupTable");
            $stmt->execute();

        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $result = $stmt->fetchAll();
        //var_dump($result);
        foreach ($result as $row){
            $addresses = json_decode($row['addresses']);
            $groups[$row['id']] = (object) [
                'count' => count($addresses),
                'addresses' => $addresses
            ];
        }
        return $groups;

    }

    public function getBalances() {
        $balances = [];
        $stmt = $this->db->prepare("SELECT name, value FROM data where name LIKE '%balance_%'");
        $stmt->execute();

        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $result = $stmt->fetchAll();
        //var_dump($result);

        foreach ($result as $val){
            $balances[$val['name']] = $val['value'];
        }
        return $balances;

    }
}