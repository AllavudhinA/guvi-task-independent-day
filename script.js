function printRange (num = 0, action = ()=>{}) {
    console.log(num)
    if(action){
        action()
    }
}

printRange(10,
    () =>printRange(9,
        () =>printRange(8,
            () =>printRange(7,
                () =>printRange(6,
                    () =>printRange(5,
                        () =>printRange(4,
                            () =>printRange(3,
                                () =>printRange(2,
                                    () =>printRange(1,()=> console.log('happy independence')
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);
      