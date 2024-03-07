import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";


export class railwayDTO {

    @IsNumber()
    wagon_warehouse_log_id: number

    @IsNumber()
    terminal_Id: number

    @IsNumber()
    warehouse_id: number

    @IsNumber()
    product_id: number

    @IsDate()
    start_stopping_time: Date

    @IsDate()
    end_stopping_time: Date

    @IsNumber()
    reason_stop: number

    @IsDate()
    created_at: Date

    @IsDate()
    updated_at: Date


}