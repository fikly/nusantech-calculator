import React,{useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
    const totalInput = 3

    const [result, setResult] = useState(0)

    const [form, setForm] = useState({
        input1 : '',
        input2 : '',
        input3 : '',
    })

    const [check, setCheck] = useState({
        input1 : false,
        input2 : false,
        input3 : false,
    })

    const handleChageInput = e =>{
        let value = e.target.value

        if(isNaN(value)){
            value = form[e.target.name]
        }

        setForm({
            ...form,
            [e.target.name] : value
        })
    }

    const handleChangeCheck = e =>{
        setCheck({
            ...check,
            [e.target.name] : e.target.checked
        })
    }

    let formInput = []

    const handleGetResult = operator =>{
        let result = 0

        let totalCheck = 0
        for(let i = 1; i <= totalInput; i++){
            if(check['input'+i]) totalCheck += 1
        }

        if(totalCheck <= 1){
            alert('Total input yang di ceklis harus lebih dari 1')
        }else{
            switch(operator){
                case '+':
                    for(let i = 1; i <= totalInput; i++){
                        if(check['input'+i]) result = (result === 0 ? parseInt(form['input'+i]) : result + parseInt(form['input'+i]))
                    }
                    break;
                case '-':
                    for(let i = 1; i <= totalInput; i++){
                        if(check['input'+i]) result = (result === 0 ? parseInt(form['input'+i]) : result - parseInt(form['input'+i]))
                    }
                    break;
                case '/':
                    for(let i = 1; i <= totalInput; i++){
                        if(check['input'+i]) result = (result === 0 ? parseInt(form['input'+i]) : result / parseInt(form['input'+i]))
                    }
                    break;
                case '*':
                    for(let i = 1; i <= totalInput; i++){
                        if(check['input'+i]) result = (result === 0 ? parseInt(form['input'+i]) : result * parseInt(form['input'+i]))
                    }
                    break;
                default :
                    return result
            }
        }

        setResult(result)
    }

    for(let i = 1; i <= totalInput; i++){
        formInput.push(
        <div className="d-flex align-items-center" key={i}>
            <div className="form-group w-100 mr-3">
                <input type="text" className="form-control custom-form" name={"input"+i} onChange={(e) => handleChageInput(e)} value={form["input"+i]} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id={"input"+i} name={"input"+i} onChange={(e) => handleChangeCheck(e)} />
                <label className="form-check-label" htmlFor={"input"+i} />
            </div>
        </div>
        )
    }

    return (
        <div className="d-flex align-items-center" style={{minHeight: '100vh'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-md-3">
                        <h3 className="text-uppercase text-center grey-default mb-4" style={{letterSpacing: '0.8px'}}>Nusantech Calculator</h3>
                        <div className="content-container">
                            {formInput}
                            <hr/>
                            <div className="row">
                                <div className="col-6">
                                    <button onClick={() => handleGetResult('+')} type="button" className="btn btn-primary w-100 mb-2">+</button>
                                    <button onClick={() => handleGetResult('-')} type="button" className="btn btn-primary w-100 mb-2">-</button>
                                    <button onClick={() => handleGetResult('/')} type="button" className="btn btn-primary w-100 mb-2">/</button>
                                    <button onClick={() => handleGetResult('*')} type="button" className="btn btn-primary w-100 mb-2">x</button>
                                </div>
                                <div className="col-6">
                                    <h5 className="grey-default text-uppercase">
                                        Hasil : {result}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
