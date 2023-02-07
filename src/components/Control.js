import React, { memo, useState } from 'react'

 function Control(props) {
    
    // console.log(props);

    const [inputValue, setInputValue] = useState("")
    const handleChangeSearch = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        props.recieveSearchData(inputValue)
    }
    const handleSort = (e) => {
        let sort = e.target.value
        let sortArr = sort.split("-")
        props.recieveSortData(sortArr[0], sortArr[1])
    }
    return (
        <div>
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                value={inputValue}
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                onChange={handleChangeSearch}
                            />
                            <button type='button' onClick={handleSubmitSearch} className="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select onChange={handleSort} className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="name-ASC">Name Sort A-Z</option>
                            <option value="name-DESC">Name Sort Z-A</option>
                            <option value="age-ASC">Age Sort A-Z</option>
                            <option value="age-DESC">Age Sort Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Control)
