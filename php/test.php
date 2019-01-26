<?php
  class API_Stock {
    private $conn,$how,$res;


    function __construct(){
         session_start();
         $this->conn = mysqli_connect("localhost","root","kalyan","stockdata");
         //$this->getData();
     }
     
     

     function getData(){
        ini_set('memory_limit', '-1');
        //$file = fopen("prices.csv","r");
        
        $this->how = "SELECT id, data, symbol, avg(close) ,avg(close - open) from hgdata group by symbol order by avg(close) desc";
        $this->res=mysqli_query($this->conn,$this->how); 
        $res2=$this->res;
        $response = array();
        $response['companies']=array();
        while(list($id, $data, $symbol, $close, $change)=$res2->fetch_row()){
           //$line_of_text= fgetcsv($file);
           $company = array();
           $company['id']=$id;
           $company['data']=$data;
           $company['symbol']=$symbol;
           $company['close']=$close;
           $company['change']=$change;
           if($change > 0){
             $company['img']="https://img.icons8.com/color/96/000000/sort-up.png";
           }else {
            $company['img']="https://img.icons8.com/ios-glyphs/90/000000/sort-down.png";
           }
          
           array_push($response['companies'],$company);

        }
       echo json_encode($response);
    }
       
    function getSpecCompany(){
      $compName=$_REQUEST['comp'];
      $this->how="Select  symbol, avg(open), avg(close), avg(low), avg(high) from hgdata where symbol='$compName'";
      $re=$this->res=mysqli_query($this->conn,$this->how); 
      $response = array();
      $response['companies']=array();
      while(list( $symbol, $open, $close, $low, $high)=$re->fetch_row()){
         $company=array();
        
        
         $company['symbol'] = $symbol;
         $company['open'] = $open;
         $company['close'] = $close;
         $company['low'] = $low;
         $company['high'] = $high;
         
         array_push($response['companies'],$company);
      }
      echo json_encode($response);
    }
    
    function getInsights(){
      $compName = $_REQUEST['compName'];
      $this->how = "Select id, data, symbol, open, close, low, high, volume from hgdata where symbol = '$compName'";
      $re=$this->res=mysqli_query($this->conn,$this->how); 
      $response = array();
      $response['companies']=array();
      while(list( $id, $data, $symbol, $open, $close, $low, $high, $volume)=$re->fetch_row()){
         $company=array();
         $company['id']  = $id;
         $company['data']  = $data;
         $company['symbol'] = $symbol;
         $company['open'] = $open;
         $company['close'] = $close;
         if(($close - $open) > 0 ){
          $company['img']="https://img.icons8.com/color/96/000000/sort-up.png";
         }else {
          $company['img']="https://img.icons8.com/ios-glyphs/90/000000/sort-down.png";
         }
         $company['change']=$close - $open;
         $company['low'] = $low;
         $company['high'] = $high;
         $company['volume'] = $volume;
         
         array_push($response['companies'],$company);
      }
      echo json_encode($response);
    }
     

    function __destruct(){
       mysqli_close($this->conn);
    }
  }








  $ht= new API_Stock();
  if(isset($_REQUEST['stock'])){
    $ht->getData();
  }else if(isset($_REQUEST['comp'])){
     $ht->getSpecCompany();
  }else if(isset($_REQUEST['compName'])){
    $ht->getInsights();
  }


?>
