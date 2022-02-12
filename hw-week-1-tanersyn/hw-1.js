const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]


  const move = (fileId, targetFolderID) => {
	const folder = folders.find((folder) =>
		folder.files.find((f) => f.id === fileId)
	);

	if (!folder) throw new Error('Dosya Bulunamadı!');
	
	const oldFolderId = folder.id;

	const fileToBeCopied = folder.files.find((f) => f.id === fileId);

	const folderToBeUpdated = folders.find(
		(folder) => folder.id === targetFolderID
	);

	if (!folderToBeUpdated) throw new Error('Dosya Bulunamadı!');
		
	if (!folderToBeUpdated.files) folderToBeUpdated.files = [];

	const folderAfterCopy = {
		...folderToBeUpdated,
		files: [...folderToBeUpdated.files, fileToBeCopied],
	};

	const finalFolders = folders.map((folder) => {
		if (folder.id === oldFolderId) {
			return {
				...folder,
				files: folder.files.filter((f) => f.id !== fileId),
			};
		}

		if (folder.id === targetFolderID) {
			return folderAfterCopy;
		} else {
			return folder;
		}
        
	});

	return finalFolders;
};

  const remove = (folderId) => {
	
	if (!(typeof folderId === 'number'))  throw new Error('Lütfen Sayısal Değer Giriniz!');
	const folderDelete = folders.find((f) => f.id === folderId);

	if (!folderDelete)  throw new Error('Dosya Bulunamadı!');
	const newFolders = folders.filter((folder) => folder.id !== folderId);

	return newFolders;

};


const removeFolder = (folderId) => {
	
	if (!(typeof folderId === 'number')) throw new Error('Lütfen Sayısal Değer Giriniz!');
	const folderRemove = folders.find((f) => f.id === folderId);

	if (!folderRemove) throw new Error('Dosya Bulunamadı!');
	const newFolders = folders.filter((folder) => folder.id !== folderId);

	return newFolders;
};

function parentFolderOf(fileId) {
    let found = 0
    let foundArray = []
    for (let i = 0; i < folders.length; i++) {
      if (folders[i].files) {
        targetFile = folders[i].files.find(x => x.id === fileId)
      } else {
        targetFile = null
      }
      if (targetFile) {
        found += 1
        foundArray.push(folders[i].id)
      }
    }
    if (found === 0) {
      console.log("Dosya Mevcut Değil")

    } else if (found === 1) {
      console.log(`${fileId} numaralı klaösör ${foundArray} klasörde bulunur`)

    }
  }

  console.log(parentFolderOf(18));

// move(17,6) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// remove(17) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5