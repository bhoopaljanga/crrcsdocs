import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

export interface s3object{
  BucketName: string,
ETag:string,
Key: string,
LastModified: Date
Owner: string
Size: number
}

@Component({
  selector: 'app-docs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DocsListComponent implements OnInit {

  constructor(private http: HttpClient) { }
docsList: s3object[] = [];
  ngOnInit(): void {
    this.getList();
    
  }

  selectedFile: File|undefined;   
 
  onFileSelected(event:any){
    this.selectedFile = <File> event.target.files[0]; 
  }
 
  async onUpload() {  
    
    this.http.get('https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws?getSingedUrl='+this.selectedFile?.name, {
      responseType: 'text'
    }).subscribe((preSignedUrl)=>{
      console.log('2. PreSignedURL: ', preSignedUrl)
      console.log('3. Upoloading File (binary) to S3')
   
        this.http.put(preSignedUrl as string, this.selectedFile
).subscribe(data => {
         console.log('=> ', data )
       }) 
    })
     
     
  }

  
  getList() {  
    
    this.http.get('https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws').subscribe((list:any)=>{
     this.docsList = list;

    })
     
     
  }

}
