import React, { useState } from 'react'

export default function Form() {
    const [inputValue, setInput] = useState({
        
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    }
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input onChange={handleChange} type="text" className="form-control" name="id" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input onChange={handleChange} type="text" className="form-control" name="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input onChange={handleChange} type="text" className="form-control" name="age" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select onChange={handleChange} className="form-control" name="gender">
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input onChange={handleChange} className="form-control" placeholder="dd/mm/yyyy" name="birthDate" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select onChange={handleChange} className="form-control" name="birthPalce">
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea onChange={handleChange} className="form-control" name="address" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
