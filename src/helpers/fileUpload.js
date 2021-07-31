export const fileUpload = async(file) => {

    const cluodUrl = 'https://api.cloudinary.com/v1_1/jackga/image/upload'
    const fromData = new FormData();
    fromData.append('upload_preset', 'react-app');
    fromData.append('file', file);

    try {
        const resp = await fetch(cluodUrl, {
            method:'POST',
            body: fromData
        });

        if(resp.ok){
              const cluodRes = await resp.json()
              return cluodRes.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
       throw error;
    }
 
}